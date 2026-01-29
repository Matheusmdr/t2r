import { DataTable } from '@/components/data-table';
import { postsColumns } from '@/components/data-table/columns/post-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { Post } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  posts: Post[];
}

export default function Page({ posts }: Props) {
  return (
    <AppLayout breadcrumbs={[]}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/products/create">Adicionar Produto</Link>
            </Button>
          </div>
          {posts && <DataTable data={posts} columns={postsColumns} />}
        </div>
      </TooltipProvider>
    </AppLayout>
  );
}
