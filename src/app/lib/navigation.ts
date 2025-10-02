export interface NavItem {
  title: string;
  path?: string; // Opsional jika ini hanya grup/label
  children?: NavItem[];
}

export const navigationTree: NavItem[] = [
  {
    title: "Dashboard",
    path: "/home",
  },
  {
    title: "Content Management",
    children: [
      {
        title: "Artikel",
        path: "/articles",
        children: [
          {
            title: "Tambah Artikel",
            path: "/articles/create",
          },
          {
            title: "Edit Artikel",
            path: "/articles/edit/:id",
          },
          {
            title: "Tinjau Artikel",
            path: "/articles/tinjau/:id",
          },
          {
            title: "View Artikel",
            path: "/articles/view/:id",
          },
        ],
      },
      {
        title: "Produk",
        path: "/products",
        children: [
          {
            title: "Tambah Produk",
            path: "/products/create",
          },
          {
            title: "Edit Produk",
            path: "/products/edit/:id",
          },
          {
            title: "Tinjau Produk",
            path: "/products/tinjau/:id",
          },
          {
            title: "View Produk",
            path: "/products/view/:id",
          },
        ],
      },
      {
        title: "Promo",
        path: "/promo",
        children: [
          {
            title: "Tambah Promo",
            path: "/promo/create", // Pastikan path ini sesuai dengan URL Anda
          },
          {
            title: "Edit Promo",
            path: "/promo/edit/:id",
          },
          {
            title: "Tinjau Promo",
            path: "/promo/tinjau/:id",
          },
          {
            title: "View Promo",
            path: "/promo/view/:id",
          },
        ],
      },
    ],
  },
  {
    title: "Information Management",
    children: [
      {
        title: "About Us",
        path: "/informasi/about-us",
        children: [
          {
            title: "Edit About Us",
            path: "informasi/about-us/edit/",
          },
          {
            title: "Tinjau About Us",
            path: "informasi/about-us/tinjau/",
          },
          {
            title: "View About Us",
            path: "informasi/about-us/view/",
          },
        ],
      },
      {
        title: "FAQ",
        path: "/informasi/faq",
        children: [
          {
            title: "Tambah FAQ",
            path: "informasi/faq/create",
          },
          {
            title: "Edit FAQ",
            path: "informasi/faq/edit/:id",
          },
          {
            title: "Tinjau FAQ",
            path: "informasi/faq/tinjau/:id",
          },
          {
            title: "View FAQ",
            path: "informasi/faq/view/:id",
          },
        ],
      },
      {
        title: "PDP Consent",
        path: "/informasi/pdp-consent",
        children: [
          {
            title: "Tambah PDP Consent",
            path: "informasi/pdp-consent/create",
          },
          {
            title: "Edit PDP Consent",
            path: "informasi/pdp-consent/edit/:id",
          },
          {
            title: "Tinjau PDP Consent",
            path: "informasi/pdp-consent/tinjau/:id",
          },
          {
            title: "View PDP Consent",
            path: "informasi/pdp-consent/view/:id",
          },
        ],
      },
      {
        title: "Terms & Condition",
        path: "/informasi/terms-condition",
        children: [
          {
            title: "Edit Terms & Condition",
            path: "informasi/terms-condition/edit",
          },
          {
            title: "Tinjau Terms & Condition",
            path: "informasi/terms-condition/tinjau",
          },
          {
            title: "View Terms & Condition",
            path: "informasi/terms-condition/view",
          },
        ],
      },
    ],
  },
  {
    title: "Master Management",
    children: [
      {
        title: "Product Master",
        path: "/master/product-master",
        children: [
          {
            title: "Tambah Product Master",
            path: "master/product-master/create",
          },
          {
            title: "Edit Product Master",
            path: "master/product-master/edit/:id",
          },
          {
            title: "Tinjau Product Master",
            path: "master/product-master/tinjau/:id",
          },
          {
            title: "View Product Master",
            path: "master/product-master/view/:id",
          },
        ]
      },
      {
        title: "Product Category",
        path: "/master/product-category",
        children: [
          {
            title: "Tambah Product Category",
            path: "master/product-category/create",
          },
          {
            title: "Edit Product Category",
            path: "master/product-category/edit/:id",
          },
          {
            title: "Tinjau Product Category",
            path: "master/product-category/tinjau/:id",
          },
          {
            title: "View Product Category",
            path: "master/product-category/view/:id",
          },
        ]
      }
    ]
  }
];

function pathsMatch(url: string, pattern: string): boolean{
  const urlSegments = url.split('/').filter(s => s);
  const patterSegments = pattern.split('/').filter(s => s);

  if(urlSegments.length !== patterSegments.length){
    return false;
  }

  return patterSegments.every((patterSegments, i) =>{
    return patterSegments.startsWith(':') || patterSegments === urlSegments[i];
  })
}

export function findPathInTree(
  tree: NavItem[],
  targetPath: string,
  currentPath: NavItem[] = []
): NavItem[] | null {
  for (const item of tree) {
    const newPath = [...currentPath, item];

    if (item.path && pathsMatch(targetPath, item.path)) {
      return newPath;
    }

    if (item.children) {
      const foundPath = findPathInTree(item.children, targetPath, newPath);
      if (foundPath) {
        return foundPath;
      }
    }
  }

  return null;
}
