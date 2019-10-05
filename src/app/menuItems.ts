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
    },
    {
      title: 'settings',
      icon: 'build',
      children: [
        {
          title: 'user_settings',
          url: '/settings/user-settings',
          icon: ''
        },
        {
          title: 'weekdays',
          url: '/settings/weekdays',
          icon: ''
        },
        {
          title: 'vacation',
          url: '/settings/vacation',
          icon: ''
        },
        {
          title: 'shifts',
          url: '/settings/shifts',
          icon: ''
        }
      ]
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
