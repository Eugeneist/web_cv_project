import { Navbar, BurgerMenu } from '@/components';
import { menuItems } from '@/data/data';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar menuItems={menuItems} />
      <BurgerMenu menuItems={menuItems} />
      {children}
    </>
  );
}
