import { Checkbox } from '@/components/ui/checkbox';
import type { Product } from '@/types'; // Ajuste o caminho dos tipos
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const productsColumns: ColumnDef<Product>[] = [
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
    header: 'Imagem',
    cell: ({ row }) => {
      const image = row.getValue('cover_image') as string;
      return (
        <div className="h-12 w-12 overflow-hidden rounded-md border bg-muted">
          {image ? (
            <img
              src={image}
              alt="Produto"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
              Sem ft.
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Produto',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium">{row.getValue('title')}</span>
        <span className="text-xs text-muted-foreground">
          SKU: {row.original.sku || '-'}
        </span>
      </div>
    ),
  },
  {
    id: 'category', // Acessor customizado para relacionamento
    header: 'Categoria',
    cell: ({ row }) => {
      // Acesso seguro via optional chaining
      return <div>{row.original.category?.title || 'Sem Categoria'}</div>;
    },
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
    accessorKey: 'updated_at',
    header: () => <div className="text-right">Atualizado</div>,
    cell: ({ row }) => (
      <div className="text-right text-sm">
        {format(new Date(row.getValue('updated_at')), 'dd/MM/yyyy')}
      </div>
    ),
  },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        editUrl="/admin/products/edit/"
        deleteUrl="/admin/products/delete/"
      />
    ),
  },
];
