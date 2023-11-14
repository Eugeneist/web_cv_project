import { Header } from '@/components';
import { Navbar } from '@/components';

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { id: 0, label: 'Home', url: '/' },
    { id: 1, label: 'CV', url: '/cv' },
    { id: 2, label: 'About', url: '/cv/about' },
    { id: 3, label: 'Skills', url: '/cv/skills' },
    { id: 4, label: 'Education', url: '/cv/education' },
    { id: 5, label: 'Projects', url: '/cv/projects' },
    { id: 6, label: 'Contacts', url: '/cv/contacts' },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />
      {children}
    </>
  );
}
