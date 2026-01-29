import { CreateAndEditPost } from '@/components/forms/components/create-and-edit-post';
import AppLayout from '@/layouts/app-layout';

export default function Page() {
  return (
    <AppLayout breadcrumbs={[]}>
      <CreateAndEditPost />
    </AppLayout>
  );
}
