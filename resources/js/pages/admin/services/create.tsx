import { CreateAndEditService } from '@/components/forms/components/create-and-edit-service';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[]}>
      <CreateAndEditService />
    </AppLayout>
  );
}
