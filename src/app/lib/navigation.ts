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
        // Jadikan halaman lain yang berhubungan sebagai 'children' dari Artikel
        children: [
          {
            title: "Tambah Artikel",
            path: "/articles/create", // Pastikan path ini sesuai dengan URL Anda
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
        // Jadikan halaman lain yang berhubungan sebagai 'children' dari Artikel
        children: [
          {
            title: "Tambah Produk",
            path: "/products/create", // Pastikan path ini sesuai dengan URL Anda
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
      // Jika ada menu lain yang sejajar dengan Artikel, letakkan di sini
      // { title: "Kategori", path: "/kategori" },
    ],
  },
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
