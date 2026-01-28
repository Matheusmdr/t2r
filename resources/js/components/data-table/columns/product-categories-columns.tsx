import { Checkbox } from '@/components/ui/checkbox';
import type { ProductCategory } from '@/types'; // Ajuste o caminho dos tipos
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const productCategoriesColumns: ColumnDef<ProductCategory>[] = [
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
    accessorKey: 'title',
    header: 'Título',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('title')}</div>
    ),
  },
  {
    accessorKey: 'slug',
    header: 'Slug',
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {row.getValue('slug')}
      </div>
    ),
  },
  {
    accessorKey: 'is_active',
    header: 'Status',
    cell: ({ row }) => {
      const isActive = row.getValue('is_active');
      return (
        <div
          className={isActive ? 'font-medium text-green-600' : 'text-red-500'}
        >
          {isActive ? 'Ativo' : 'Inativo'}
        </div>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: () => <div className="text-right">Criado em</div>,
    cell: ({ row }) => (
      <div className="text-right text-sm text-muted-foreground">
        {format(new Date(row.getValue('created_at')), 'dd/MM/yyyy - kk:mm')}
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/product-categories/edit/"
        deleteUrl="/admin/product-categories/delete/"
      />
    ),
  },
];
