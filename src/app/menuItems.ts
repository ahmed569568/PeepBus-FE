export class MenuItems {
  items: MenuItem[] = [
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'data_management',
      icon: 'apps',
      children: [
        {
          title: 'branches',
          url: '/branches',
          icon: 'dashboard'
        },
        {
          title: 'users',
          url: '/users',
          icon: 'persons'
        },
        {
          title: 'brands',
          url: '/brands',
          icon: 'reorder'
        },
        {
          title: 'models',
          url: '/models',
          icon: 'reorder'
        },
        {
          title: 'cars',
          url: '/cars',
          icon: 'directions_car'
        },
        {
          title: 'specifications',
          url: '/specs',
          icon: 'reorder'
        }
      ]
    },
    {
      title: 'check_inout',
      icon: 'cached',
      children: [
        {
          title: 'check-in',
          url: '/check-in',
          icon: 'arrow_upward'
        },
        {
          title: 'check-out',
          url: '/check-out',
          icon: 'arrow_downward'
        }
      ]
    },
    {
      title: 'roles',
      url: '/roles',
      icon: 'person'
    },
    {
      title: 'auditlog',
      url: '/auditlog',
      icon: 'description'
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
