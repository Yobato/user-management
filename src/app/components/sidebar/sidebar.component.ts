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
          "path": "/promos",
          "label": "Promo",
          "icon": "percent"
        },
        {
          "path": "/navigations",
          "label": "Navigasi",
          "icon": "menu"
        }
      ]
    }
  ]
}
