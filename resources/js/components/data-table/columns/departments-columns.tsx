import { Checkbox } from '@/components/ui/checkbox';
import type { Department } from '@/types'; // Ajuste o caminho dos tipos
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const departmentsColumns: ColumnDef<Department>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'sort_order',
    header: 'Ordem',
    cell: ({ row }) => (
      <div className="text-center font-mono">{row.getValue('sort_order')}</div>
    ),
  },
  {
    accessorKey: 'name',
    header: 'Departamento',
    cell: ({ row }) => <div className="font-bold">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'email',
    header: 'Contato',
    cell: ({ row }) => (
      <div className="flex flex-col text-sm">
        <span>{row.original.email || '-'}</span>
        <span className="text-xs text-muted-foreground">
          {row.original.phone || row.original.whatsapp}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'updated_at',
    header: () => <div className="text-right">Atualização</div>,
    cell: ({ row }) => (
      <div className="text-right">
        {format(new Date(row.getValue('updated_at')), 'dd/MM/yyyy')}
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/departments/edit/"
        deleteUrl="/admin/departments/delete/"
      />
    ),
  },
];
