import { Checkbox } from '@/components/ui/checkbox';
import type { Post } from '@/types'; // Certifique-se de ter este tipo
import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { DataTableRowActions } from '../components/data-table-row-actions';

export const postsColumns: ColumnDef<Post>[] = [
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
        <div className="h-12 w-12 overflow-hidden rounded-md border bg-muted">
          {image ? (
            <img
              src={image}
              alt="Post"
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
    header: 'Título',
    cell: ({ row }) => (
      <div className="flex flex-col">
        <span className="font-medium">{row.getValue('title')}</span>
        <span className="text-xs text-muted-foreground">
          Slug: {row.original.slug}
        </span>
      </div>
    ),
  },
  {
    accessorKey: 'is_published',
    header: 'Status',
    cell: ({ row }) => {
      const isPublished = row.getValue('is_published');
      return (
        <div
          className={
            isPublished ? 'font-medium text-blue-600' : 'text-gray-500'
          }
        >
          {isPublished ? 'Publicado' : 'Rascunho'}
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
        editUrl="/admin/posts/edit/"
        deleteUrl="/admin/posts/delete/"
      />
    ),
  },
];
