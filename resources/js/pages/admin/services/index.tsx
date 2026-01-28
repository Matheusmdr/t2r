import { DataTable } from '@/components/data-table';
import { servicesColumns } from '@/components/data-table/columns/services-columns';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppLayout from '@/layouts/app-layout';
import { Service } from '@/types';
import { Link } from '@inertiajs/react';

interface Props {
  services: Service[];
}

export default function Page({ services }: Props) {
  return (
    <AppLayout breadcrumbs={[]}>
      <TooltipProvider delayDuration={0}>
        <div className="flex flex-col gap-2 p-4">
          <div>
            <Button className="w">
              <Link href="/admin/services/create">Adicionar Serviço</Link>
            </Button>
          </div>
          {services && <DataTable data={services} columns={servicesColumns} />}
        </div>
      </TooltipProvider>
    </AppLayout>
  );
}
