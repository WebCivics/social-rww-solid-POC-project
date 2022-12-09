import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';
declare var pg: any;
@Component({
  selector: 'executive-layout',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExecutiveLayout extends RootLayout implements OnInit {
  menuItems = [
    {
      label: 'Dashboard',
      details: '12 New Updates',
      routerLink: 'dashboard',
      iconType: 'pg',
      iconName: 'home'
    },
    {
      label: 'Social',
      routerLink: 'social',
      iconType: 'pg',
      iconName: 'social'
    },
    {
      label: 'Builder',
      routerLink: 'builder/executive-builder',
      iconType: 'pg',
      iconName: 'layouts'
    },
    {
      label: 'UI Elements',
      iconType: 'letter',
      iconName: 'Ui',
      toggle: 'close',
      mToggle: 'close',
      submenu: [
        {
          label: 'Color',
          routerLink: 'ui/color',
          iconType: 'letter',
          iconName: 'c'
        },
        {
          label: 'Typography',
          routerLink: 'ui/typography',
          iconType: 'letter',
          iconName: 't'
        },
        {
          label: 'Icons',
          routerLink: 'ui/icons',
          iconType: 'letter',
          iconName: 'i'
        },
        {
          label: 'Buttons',
          routerLink: 'ui/buttons',
          iconType: 'letter',
          iconName: 'b'
        },
        {
          label: 'Notifications',
          routerLink: 'ui/notifications',
          iconType: 'letter',
          iconName: 'n'
        },
        {
          label: 'Modals',
          routerLink: 'ui/modal',
          iconType: 'letter',
          iconName: 'm'
        },
        {
          label: 'Progress & Activity',
          routerLink: 'ui/progress',
          iconType: 'letter',
          iconName: 'pa'
        },
        {
          label: 'Tabs & Accordians',
          routerLink: 'ui/tabs',
          iconType: 'letter',
          iconName: 'a'
        },
        {
          label: 'Sliders',
          routerLink: 'ui/sliders',
          iconType: 'letter',
          iconName: 's'
        },
        {
          label: 'Treeview',
          routerLink: 'ui/tree',
          iconType: 'letter',
          iconName: 'tv'
        }
      ]
    },
    {
      label: 'Forms',
      iconType: 'pg',
      iconName: 'form',
      toggle: 'close',
      mToggle: 'close',
      submenu: [
        {
          label: 'Form Elements',
          routerLink: 'forms/elements',
          iconType: 'letter',
          iconName: 'fe'
        },
        {
          label: 'Form Layouts',
          routerLink: 'forms/layouts',
          iconType: 'letter',
          iconName: 'fl'
        },
        {
          label: 'Form Wizard',
          routerLink: 'forms/wizard',
          iconType: 'letter',
          iconName: 'fq'
        }
      ]
    },
    {
      label: 'Cards',
      routerLink: 'cards',
      iconType: 'pg',
      iconName: 'grid'
    },
    {
      label: 'Views',
      routerLink: 'views',
      iconType: 'pg',
      iconName: 'ui'
    },
    {
      label: 'Tables',
      iconType: 'pg',
      iconName: 'tables',
      toggle: 'close',
      mToggle: 'close',
      submenu: [
        {
          label: 'Basic Tables',
          routerLink: 'tables/basic',
          iconType: 'letter',
          iconName: 'bt'
        },
        {
          label: 'Advance Tables',
          routerLink: 'tables/advance',
          iconType: 'letter',
          iconName: 'dt'
        }
      ]
    },
    {
      label: 'Maps',
      iconType: 'pg',
      iconName: 'map',
      toggle: 'close',
      mToggle: 'close',
      submenu: [
        {
          label: 'Google Maps',
          routerLink: 'maps/google/with-header',
          iconType: 'letter',
          iconName: 'gm'
        }
      ]
    },
    {
      label: 'Charts',
      routerLink: 'charts',
      iconType: 'pg',
      iconName: 'charts'
    },
    {
      label: 'Extra',
      iconType: 'pg',
      iconName: 'bag',
      toggle: 'close',
      mToggle: 'close',
      submenu: [
        {
          label: 'Invoice',
          routerLink: 'extra/invoice',
          iconType: 'letter',
          iconName: 'in'
        },
        {
          label: '404 Page',
          routerLink: 'session/error/404',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: '500 Page',
          routerLink: 'session/error/500',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: 'Login',
          routerLink: 'session/login',
          iconType: 'letter',
          iconName: 'l'
        },
        {
          label: 'Register',
          routerLink: 'session/register',
          iconType: 'letter',
          iconName: 're'
        },
        {
          label: 'Lockscreen',
          routerLink: 'session/lock',
          iconType: 'letter',
          iconName: 'ls'
        },
        {
          label: 'Gallery',
          routerLink: 'extra/gallery',
          iconType: 'letter',
          iconName: 'gl'
        },
        {
          label: 'Timeline',
          routerLink: 'extra/timeline/container',
          iconType: 'letter',
          iconName: 't'
        }
      ]
    },
    {
      label: 'Docs',
      externalLink: 'https://docs.pages.revox.io/v/angular/',
      target: '_blank',
      iconType: 'pg',
      iconName: 'note'
    },
    {
      label: 'Changelog',
      externalLink: 'http://changelog.pages.revox.io/',
      target: '_blank',
      iconType: 'letter',
      iconName: 'Cl'
    }
  ];
  ngOnInit() {
    pg.isHorizontalLayout = true;
    this.changeLayout('horizontal-menu');
    this.changeLayout('horizontal-app-menu');
  }
}