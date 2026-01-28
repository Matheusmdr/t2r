import { CreateAndEditProduct } from '@/components/forms/components/create-and-edit-product';
import AppLayout from '@/layouts/app-layout';
import { Product, ProductCategory } from '@/types';

interface Props {
  product: Product;
  categories: ProductCategory[];
}

export default function Page({ product, categories }: Props) {
  console.log(product);
  return (
    <AppLayout>
      <CreateAndEditProduct data={product} categories={categories} />
    </AppLayout>
  );
}
