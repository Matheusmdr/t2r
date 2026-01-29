import { CreateAndEditBanner } from '@/components/forms/components/create-and-edit-banner';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[]}>
      <CreateAndEditBanner />
    </AppLayout>
  );
}
