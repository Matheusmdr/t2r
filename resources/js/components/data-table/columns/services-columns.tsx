import { Checkbox } from '@/components/ui/checkbox';
import type { Service } from '@/types'; // Ajuste o caminho dos tipos
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const servicesColumns: ColumnDef<Service>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cover_image',
    header: 'Capa',
    cell: ({ row }) => {
      const image = row.getValue('cover_image') as string;
      return (
        <div className="h-10 w-16 overflow-hidden rounded border bg-muted">
          {image ? (
            <img
              src={image}
              alt="Serviço"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs">
              N/A
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Serviço',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'is_active',
    header: 'Visibilidade',
    cell: ({ row }) => (
      <div
        className={
          row.getValue('is_active') ? 'text-green-600' : 'text-gray-400'
        }
      >
        {row.getValue('is_active') ? 'Público' : 'Oculto'}
      </div>
    ),
  },
  {
    accessorKey: 'created_at',
    header: () => <div className="text-right">Criado em</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {format(new Date(row.getValue('created_at')), 'dd/MM/yyyy - kk:mm')}
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/services/edit/"
        deleteUrl="/admin/services/delete/"
      />
    ),
  },
];
