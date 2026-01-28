import { DataTable } from '@/components/data-table';
import { productCategoriesColumns } from '@/components/data-table/columns/product-categories-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { ProductCategory } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  categories: ProductCategory[];
}

export default function Page({ categories }: Props) {
  console.log(categories);

  return (
    <AppLayout breadcrumbs={[]}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/product-categories/create">
                Adicionar Categoria{' '}
              </Link>
            </Button>
          </div>
          {categories && (
            <DataTable data={categories} columns={productCategoriesColumns} />
          )}
        </div>
      </TooltipProvider>
    </AppLayout>
  );
}
