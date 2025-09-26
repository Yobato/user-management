import { Component, OnInit } from "@angular/core";

export interface NavLink{
  path: string;
  label: string;
  icon: string;
}

export interface NavSection{
  title: string;
  children: NavLink[];
}

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {

  ngOnInit(): void {
    this.menuItems.forEach(section => {
      this.sectionState[section.title] = true;
    })

  }

  public sectionState: {[key: string]: boolean} = {};

  public toggleSection(sectionTitle: string):void{
    this.sectionState[sectionTitle] = !this.sectionState[sectionTitle];
  }

  public menuItems: NavSection[] = [
    {
      "title": "Dashboard",
      "children": [
        {
          "path": "/home",
          "label": "Home",
          "icon": "home"
        }
      ]
    },
    {
      "title": "Content Management",
      "children": [
        {
          "path": "/articles",
          "label": "Artikel",
          "icon": "file_open"
        },
        {
          "path": "/banner",
          "label": "Banner",
          "icon": "image"
        },
        {
          "path": "/products",
          "label": "Produk",
          "icon": "inventory_2"
        },
        {
          "path": "/promo",
          "label": "Promo",
          "icon": "percent"
        },
        {
          "path": "/navigations",
          "label": "Navigasi",
          "icon": "menu"
        }
      ]
    },
    {
      "title": "Information Management",
      "children": [
        {
          "path": "/informasi/about-us",
          "label": "About Us",
          "icon": "badge"
        },
        {
          "path": "/informasi/faq",
          "label": "FAQ",
          "icon": "image"
        },
        {
          "path": "/informasi/consent-letter",
          "label": "Consent Letter",
          "icon": "inventory_2"
        },
        {
          "path": "/informasi/privacy-setting",
          "label": "Kebijakan Privasi",
          "icon": "percent"
        },
        {
          "path": "/informasi/eula",
          "label": "Syarat dan Ketentuan",
          "icon": "menu"
        }
      ]
    }
  ]
}
