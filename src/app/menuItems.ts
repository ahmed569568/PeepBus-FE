export class MenuItems {
  items: MenuItem[] = [
    {
      title: 'control',
      url: '/dashboard',
      icon: 'desktop_windows'
    },
    {
      title: 'vehicles',
      url: '/vehicles',
      icon: 'directions_bus'
    },
    {
      title: 'drivers',
      url: '/drivers',
      icon: 'person'
    },
    {
      title: 'students',
      url: '/students',
      icon: 'directions_bus'
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
