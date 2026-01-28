import { CreateAndEditService } from '@/components/forms/components/create-and-edit-service';
import AppLayout from '@/layouts/app-layout';
import { Service } from '@/types';

interface Props {
  service: Service;
}

export default function Page({ service }: Props) {
  return (
    <AppLayout>
      <CreateAndEditService data={service} />
    </AppLayout>
  );
}
