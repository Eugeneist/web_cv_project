import { Header, Footer, Navbar } from '@/components';
import { menuItems } from '@/data/data';
export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Navbar menuItems={menuItems} />
        {children}
      </main>
      <Footer />
    </div>
  );
}
