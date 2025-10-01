import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

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

export class SidebarComponent implements OnInit, AfterViewInit {

  public showTopFade: boolean = false;
  public showBottomFade: boolean = true;

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.menuItems.forEach(section => {
      this.sectionState[section.title] = true;
    })

  }

  ngAfterViewInit(): void {
      setTimeout(()=> this.checkScroll(), 0)
  }

  onScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void{
    const element = this.scrollContainer.nativeElement;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    this.showTopFade = scrollTop > 5;
    this.showBottomFade = scrollTop + clientHeight < scrollHeight - 5;
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
          "path": "/informasi/pdp-consent",
          "label": "PDP Consent",
          "icon": "inventory_2"
        },
        {
          "path": "/informasi/privacy-setting",
          "label": "Kebijakan Privasi",
          "icon": "percent"
        },
        {
          "path": "/informasi/terms-condition",
          "label": "Syarat dan Ketentuan",
          "icon": "menu"
        }
      ]
    },
    {
      "title": "Master Management",
      "children": [
        {
          "path": "/master/product-master",
          "label": "Master Produk",
          "icon": "dns"

        },
        {
          "path": "/master/product-category",
          "label": "Kategori Produk",
          "icon": "view_list"
        },
        {
          "path": "/master/pricing",
          "label": "Pricing",
          "icon": "paid"
        },
        {
          "path": "/master/marital-status",
          "label": "Status Perkawinan",
          "icon": "family_restroom"
        },
        {
          "path": "/master/property-type",
          "label": "Tipe properti",
          "icon": "foundation"
        },
        {
          "path": "/master/property-condition",
          "label": "Kondisi properti",
          "icon": "gite"
        }
      ]
    }
  ]
}
