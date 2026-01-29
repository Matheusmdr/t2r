import { CreateAndEditBanner } from '@/components/forms/components/create-and-edit-banner';
import AppLayout from '@/layouts/app-layout';
import { Banner } from '@/types';

interface Props {
  banner: Banner;
}

export default function Page({ banner }: Props) {
  return (
    <AppLayout>
      <CreateAndEditBanner data={banner} />
    </AppLayout>
  );
}
