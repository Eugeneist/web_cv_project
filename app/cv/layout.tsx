import { Header } from '@/components';

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
