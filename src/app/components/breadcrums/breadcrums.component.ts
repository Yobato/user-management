import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { navigationTree, findPathInTree, NavItem } from '../../lib/navigation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'breadcrums-component',
  templateUrl: './breadcrums.component.html',
  imports: [CommonModule, RouterLink],
})
export class BreadcrumsComponent implements OnInit {
  // Properti untuk menyimpan item breadcrumb yang sudah diproses
  public breadcrumbItems: NavItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // Dengarkan setiap perubahan pada URL
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Setiap kali URL berubah, bangun ulang breadcrumb
        this.buildBreadcrumbs();
      });

    // Bangun breadcrumb untuk pertama kali saat komponen dimuat
    this.buildBreadcrumbs();
  }

  private buildBreadcrumbs(): void {
    // 1. Dapatkan path URL saat ini (ekuivalen dengan `usePathname`)
    const currentUrl = this.router.url;

    // 2. Cari path di dalam navigationTree
    const pathFromTree = findPathInTree(navigationTree, currentUrl);

    if (!pathFromTree) {
      this.breadcrumbItems = []; // Atau set default jika path tidak ditemukan
      return;
    }

    // 3. Dapatkan semua parameter dari URL (ekuivalen dengan `useParams`)
    const allParams = this.getAllParams(this.activatedRoute.snapshot);

    // 4. Ganti placeholder di path dengan nilai parameter asli
    this.breadcrumbItems = pathFromTree.map(item => {
      let resolvedPath = item.path || '';
      for (const key in allParams) {
        if (allParams.hasOwnProperty(key)) {
          resolvedPath = resolvedPath.replace(`:${key}`, allParams[key]);
        }
      }
      // Kembalikan item baru dengan path yang sudah di-resolve
      return { ...item, path: resolvedPath };
    });
  }

  // Fungsi helper untuk mengumpulkan semua parameter dari rute aktif dan anak-anaknya
  private getAllParams(route: any): Params {
    let params: Params = { ...route.params };
    if (route.firstChild) {
      params = { ...params, ...this.getAllParams(route.firstChild) };
    }
    return params;
  }
}
