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
            title: "Tambah Artikel",
            path: "/products/create", // Pastikan path ini sesuai dengan URL Anda
          },
          {
            title: "Edit Artikel",
            path: "/products/[id]/edit",
          },
          {
            title: "Tinjau Artikel",
            path: "/products/[id]/tinjau",
          },
          {
            title: "View Artikel",
            path: "/products/[id]/view",
          },
        ],
      },
      // Jika ada menu lain yang sejajar dengan Artikel, letakkan di sini
      // { title: "Kategori", path: "/kategori" },
    ],
  },
];

export function findPathInTree(
  tree: NavItem[],
  targetPath: string,
  currentPath: NavItem[] = []
): NavItem[] | null {
  for (const item of tree) {
    const newPath = [...currentPath, item];

    // Cek jika path-nya cocok (termasuk menangani path dinamis)
    const regexPath = item.path?.replace(/\[.*?\]/g, ".*") || "";
    if (item.path && new RegExp(`^${regexPath}$`).test(targetPath)) {
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
