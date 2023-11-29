import { Header } from '@/components';
import { Footer } from '@/components';

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
