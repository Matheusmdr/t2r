import Footer from '@/components/footer';
import Header from '@/components/header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-bg text-text-primary">{children}</main>
      <Footer />
    </>
  );
}
