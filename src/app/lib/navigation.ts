export interface NavItem {
  title: string;
  path?: string; // Opsional jika ini hanya grup/label
  children?: NavItem[];
}

export const navigationTree: NavItem[] = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Content Management",
    children: [
      {
        title: "Artikel",
        path: "/home",
        // Jadikan halaman lain yang berhubungan sebagai 'children' dari Artikel
        children: [
          {
            title: "Tambah Artikel",
            path: "/artikel/add", // Pastikan path ini sesuai dengan URL Anda
          },
          {
            title: "Edit Artikel",
            path: "/artikel/[id]/edit",
          },
          {
            title: "Tinjau Artikel",
            path: "/artikel/[id]/tinjau",
          },
          {
            title: "View Artikel",
            path: "/artikel/[id]/view",
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
