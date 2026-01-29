import { CreateAndEditPost } from '@/components/forms/components/create-and-edit-post';
import AppLayout from '@/layouts/app-layout';
import { Post } from '@/types';

interface Props {
  post: Post;
}

export default function Page({ post }: Props) {
  return (
    <AppLayout>
      <CreateAndEditPost data={post} />
    </AppLayout>
  );
}
