export class MenuItems {
  items: MenuItem[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'drivers',
      url: '/drivers',
      icon: 'person'
    }
  ];
}

interface MenuItem {
  title: string;
  url?: string;
  icon: string;
  children?: {
    title: string;
    url: string;
    icon: string;
  }[];
}
