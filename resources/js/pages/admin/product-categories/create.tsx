import { CreateAndEditCategory } from '@/components/forms/components/create-and-edit-category';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[]}>
      <CreateAndEditCategory />
    </AppLayout>
  );
}
