import { DataTable } from '@/components/data-table';
import { bannersColumns } from '@/components/data-table/columns/banners-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { Banner } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  banners: Banner[];
}

export default function Page({ banners }: Props) {
  return (
    <AppLayout breadcrumbs={[]}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/banners/create">Adicionar Banner</Link>
            </Button>
          </div>
          {banners && <DataTable data={banners} columns={bannersColumns} />}
        </div>
      </TooltipProvider>
    </AppLayout>
  );
}
