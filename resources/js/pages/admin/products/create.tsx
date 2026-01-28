import { CreateAndEditProduct } from '@/components/forms/components/create-and-edit-product';
import AppLayout from '@/layouts/app-layout';
import { ProductCategory } from '@/types';

interface Props {
  categories: ProductCategory[];
}

export default function Page({ categories }: Props) {
  return (
    <AppLayout breadcrumbs={[]}>
      <CreateAndEditProduct categories={categories} />
    </AppLayout>
  );
}
