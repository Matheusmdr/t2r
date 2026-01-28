import { DataTable } from '@/components/data-table';
import { productsColumns } from '@/components/data-table/columns/product-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { Product } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  products: Product[];
}

export default function Page({ products }: Props) {
  console.log(products);

  return (
    <AppLayout breadcrumbs={[]}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/products/create">Adicionar Produto</Link>
            </Button>
          </div>
          {products && <DataTable data={products} columns={productsColumns} />}
        </div>
      </TooltipProvider>
    </AppLayout>
  );
}
