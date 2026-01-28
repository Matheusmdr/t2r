import { Checkbox } from '@/components/ui/checkbox';
import type { Banner } from '@/types'; // Certifique-se de ter este tipo
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const bannersColumns: ColumnDef<Banner>[] = [
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
    accessorKey: 'image_path',
    header: 'Imagem (Desktop)',
    cell: ({ row }) => {
      const image = row.getValue('image_path') as string;
      return (
        <div className="h-12 w-24 overflow-hidden rounded-md border bg-muted">
          {image ? (
            <img
              src={image}
              alt="Banner"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
              Sem img.
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'title',
    header: 'Título',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium">{row.getValue('title')}</span>
        {row.original.link_url && (
          <span className="max-w-[150px] truncate text-xs text-muted-foreground">
            {row.original.link_url}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'order',
    header: 'Ordem',
    cell: ({ row }) => <div>{row.getValue('order')}</div>,
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
        editUrl="/admin/banners/edit/"
        deleteUrl="/admin/banners/delete/"
      />
    ),
  },
];
