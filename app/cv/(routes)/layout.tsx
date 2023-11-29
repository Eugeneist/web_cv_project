import { Navbar } from '@/components';
import { menuItems } from '@/data/data';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar menuItems={menuItems} />
      {children}
    </>
  );
}
