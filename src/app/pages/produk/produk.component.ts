import { Component } from '@angular/core';
import { TableColumn } from '../../components/table-untitled/table-untitled.component';

export interface DataItem {
  id: number;
  kategori: string;
  detail: string;
  uploader: string;
  approver: string;
  update_date: string;
  image: File | string;
  status_approval: string;
  status_fung: string;
}

@Component({
  selector: 'app-produk',
  standalone: false,
  templateUrl: './produk.html',
  styleUrl: './produk.css'
})
export class ProdukPage {public page: number = 1;
    public query: string = ''; // State untuk menampung teks pencarian
    public itemsPerPage: number = 7;

    disabled = false; // nggak usah @Input kalau ini internal

    // component.ts
    tableCols: TableColumn[] = [
      { key: 'kategori', label: 'Kategori', sortable: true },
      { key: 'detail', label: 'Detail', sortable: true },
      { key: 'uploader', label: 'Pengunggah', sortable: true },
      { key: 'approver', label: 'Approver', sortable: true },
      { key: 'update_date', label: 'Tanggal Update', sortable: true },
      { key: 'image', label: 'Image', sortable: false, type: 'image' },
      { key: 'status_approval', label: 'Status', type: 'badge', sortable: true },
      { key: 'status_fung', label: 'Fungsi', type: 'badge', sortable: true },
      { key: 'actions', label: 'Actions', isAction: true }
    ];

    public tableData: DataItem[] =
    [
    { "id": 1,
      "kategori": "Griya Refinancing",
      "detail": "Program Griya Refinancing Commodi - Ut porro repudiandae ipsam alias natus magni ullam pariatur.",
      "uploader": "Dodo Anggriawan",
      "approver": "Tri Prastuti, S.E.",
      "update_date": "2025-05-26",
      "image": "https://picsum.photos/seed/1/200/150",
      "status_approval": "Inactive",
      "status_fung": "Active",
    },
    { "id": 2,
      "kategori": "Griya Mabrur",
      "detail": "Program Griya Mabrur Laboriosam - Porro maxime tempore fuga laudantium aut esse laudantium nostrum fuga.",
      "uploader": "Dt. Edi Mandasari",
      "approver": "Prabu Tarihoran, S.Pd",
      "update_date": "2025-01-19",
      "image": "https://picsum.photos/seed/2/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 3,
      "kategori": "Griya Take Over",
      "detail": "Program Griya Take Over A - Nostrum perferendis iste at laborum dicta reiciendis eos iure voluptatem.",
      "uploader": "Amelia Wibisono",
      "approver": "Devi Rahmawati, S.Gz",
      "update_date": "2025-03-18",
      "image": "https://picsum.photos/seed/3/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    {
      "id": 4,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Ipsa - At quam tempore perspiciatis accusantium facere quam magnam in ducimus.",
      "uploader": "Fitriani Wulandari",
      "approver": "Genta Sitompul",
      "update_date": "2025-05-02",
      "image": "https://picsum.photos/seed/4/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 5,
      "kategori": "Griya SiMuda",
      "detail": "Program Griya SiMuda Impedit - Illum omnis ab accusantium sint voluptatibus cumque a architecto repellendus.",
      "uploader": "Ir. Lala Puspasari, S.Farm",
      "approver": "Cut Ajeng Irawan, M.Farm",
      "update_date": "2025-08-20",
      "image": "https://picsum.photos/seed/5/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    {
      "id": 6,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Veniam - Quidem dolor dicta vel dolorem vero magni aliquam nam.",
      "uploader": "KH. Bakijan Suryatmi, S.E.",
      "approver": "Hartana Narpati",
      "update_date": "2025-07-14",
      "image": "https://picsum.photos/seed/6/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    {
      "id": 7,
      "kategori": "Griya Mabrur",
      "detail": "Program Griya Mabrur Animi - Similique illo necessitatibus suscipit iure quo architecto sint.",
      "uploader": "Yusuf Uyainah",
      "approver": "Gabriella Rahimah",
      "update_date": "2025-08-12",
      "image": "https://picsum.photos/seed/7/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 8,
      "kategori": "Griya Mabrur",
      "detail": "Program Griya Mabrur Repellat - At quidem nobis necessitatibus non vel.",
      "uploader": "Timbul Widiastuti",
      "approver": "Ulya Hutagalung",
      "update_date": "2025-08-07",
      "image": "https://picsum.photos/seed/8/200/150",
      "status_approval": "Inactive",
      "status_fung": "Active",
    },
    {
      "id": 9,
      "kategori": "Griya Refinancing",
      "detail": "Program Griya Refinancing Aperiam - Quaerat minima assumenda placeat fugit alias aspernatur quia vitae.",
      "uploader": "Banawa Mandala",
      "approver": "Dr. Yessi Mustofa",
      "update_date": "2025-02-10",
      "image": "https://picsum.photos/seed/9/200/150",
      "status_approval": "Inactive",
      "status_fung": "Active",
    },
    {
      "id": 10,
      "kategori": "Griya SiMuda",
      "detail": "Program Griya SiMuda Dolor - Quidem facilis debitis ullam vitae nemo amet fugit nihil.",
      "uploader": "Drs. Wulan Saragih",
      "approver": "Restu Puspasari",
      "update_date": "2025-05-14",
      "image": "https://picsum.photos/seed/10/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 11,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Eveniet - Iste quisquam harum eaque vero tempora blanditiis.",
      "uploader": "Janet Marbun",
      "approver": "Sabrina Mandasari",
      "update_date": "2025-02-12",
      "image": "https://picsum.photos/seed/11/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 12,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Sequi - Quibusdam molestias omnis iste fugiat quidem deserunt.",
      "uploader": "drg. Estiono Wijayanti, S.Ked",
      "approver": "Eva Damanik",
      "update_date": "2025-01-30",
      "image": "https://picsum.photos/seed/12/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 13,
      "kategori": "Griya Refinancing",
      "detail": "Program Griya Refinancing Reprehenderit - Autem facilis iure autem.",
      "uploader": "Devi Thamrin",
      "approver": "Citra Sitorus",
      "update_date": "2025-03-06",
      "image": "https://picsum.photos/seed/13/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 14,
      "kategori": "Griya Take Over",
      "detail": "Program Griya Take Over Quod - Aperiam sapiente exercitationem iusto quo officiis eveniet.",
      "uploader": "Putri Dongoran, S.Sos",
      "approver": "Puti Yani Sinaga, S.T.",
      "update_date": "2025-04-10",
      "image": "https://picsum.photos/seed/14/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    {
      "id": 15,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Earum - Aperiam ipsam numquam maxime aspernatur eius possimus.",
      "uploader": "Gara Nurdiyanti",
      "approver": "R.M. Ibun Rahmawati",
      "update_date": "2025-09-10",
      "image": "https://picsum.photos/seed/15/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 16,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Deleniti - Eligendi voluptatum rerum vel incidunt ad dicta numquam.",
      "uploader": "Hj. Patricia Kusumo, S.Gz",
      "approver": "Darsirah Latupono",
      "update_date": "2025-03-25",
      "image": "https://picsum.photos/seed/16/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 17,
      "kategori": "Griya Mabrur",
      "detail": "Program Griya Mabrur Eius - Adipisci iure vel iusto iste dolores labore sed quo distinctio.",
      "uploader": "Ulya Halim",
      "approver": "R. Jais Permadi",
      "update_date": "2025-08-19",
      "image": "https://picsum.photos/seed/17/200/150",
      "status_approval": "Inactive",
      "status_fung": "Active",
    },
    { "id": 18,
      "kategori": "Griya Mabrur",
      "detail": "Program Griya Mabrur Dicta - Nemo tempora delectus illo repellat maiores perferendis perferendis.",
      "uploader": "dr. Febi Rahmawati",
      "approver": "Pangestu Prayoga",
      "update_date": "2025-04-25",
      "image": "https://picsum.photos/seed/18/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 19,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Ad - Pariatur fugiat quibusdam aliquid repellendus quam eligendi rerum quae.",
      "uploader": "Indah Namaga",
      "approver": "Titi Lazuardi",
      "update_date": "2025-08-09",
      "image": "https://picsum.photos/seed/19/200/150",
      "status_approval": "Inactive",
      "status_fung": "Active",
    },
    {
      "id": 20,
      "kategori": "Griya Top-up",
      "detail": "Program Griya Top-up Corporis - Autem omnis dolorem ex nostrum aliquid.",
      "uploader": "Ajeng Mangunsong, S.Farm",
      "approver": "Luthfi Kusumo",
      "update_date": "2025-03-01",
      "image": "https://picsum.photos/seed/20/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    {
      "id": 21,
      "kategori": "Griya Reguler",
      "detail": "Program Griya Reguler Explicabo - Blanditiis quisquam ipsam quas possimus animi.",
      "uploader": "Luthfi Irawan",
      "approver": "Rina Nasyidah",
      "update_date": "2025-05-27",
      "image": "https://picsum.photos/seed/21/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 22,
      "kategori": "Griya SiMuda",
      "detail": "Program Griya SiMuda Distinctio - Eos fugiat suscipit commodi sed.",
      "uploader": "Zahra Kusumo",
      "approver": "Prabowo Kuswandari",
      "update_date": "2025-07-11",
      "image": "https://picsum.photos/seed/22/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 23,
      "kategori": "Griya SiMuda",
      "detail": "Program Griya SiMuda Quisquam - Animi doloremque doloribus unde exercitationem.",
      "uploader": "Ayu Palastri",
      "approver": "Betania Wahyudin",
      "update_date": "2025-08-29",
      "image": "https://picsum.photos/seed/23/200/150",
      "status_approval": "Inactive",
      "status_fung": "Inactive",
    },
    {
      "id": 24,
      "kategori": "Griya Take Over",
      "detail": "Program Griya Take Over Officiis - Maxime fugiat possimus qui ipsam sint.",
      "uploader": "Candra Astuti",
      "approver": "Sarah Siregar",
      "update_date": "2025-02-19",
      "image": "https://picsum.photos/seed/24/200/150",
      "status_approval": "Active",
      "status_fung": "Active",
    },
    {
      "id": 25,
      "kategori": "Griya Take Over",
      "detail": "Program Griya Take Over Dolores - Minus explicabo molestias dolores deleniti voluptas.",
      "uploader": "dr. Ian Ardianto",
      "approver": "Kuncara Tamba, S.E.I",
      "update_date": "2025-06-04",
      "image": "https://picsum.photos/seed/25/200/150",
      "status_approval": "Active",
      "status_fung": "Inactive",
    },
    ]

    onSortChange(e: { key: string; direction: 'asc' | 'desc' }) {
      // Buat array baru dari this.tableData, lalu urutkan
      this.tableData = [...this.tableData].sort((a, b) => {
        const key = e.key as keyof DataItem;
        if (a[key] < b[key]) return e.direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return e.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    public get filteredData(): DataItem[] {
      if (!this.query) {
        return this.tableData;
      }
      const queryLower = this.query.toLowerCase();
      return this.tableData.filter(
        (row) =>
          row.kategori.toLowerCase().includes(queryLower) ||
          row.detail.toLowerCase().includes(queryLower) ||
          row.uploader.toLowerCase().includes(queryLower) ||
          row.approver.toLowerCase().includes(queryLower) ||
          row.update_date.toLowerCase().includes(queryLower) ||
          // row.highlight.toLowerCase().includes(queryLower) ||
          row.status_approval.toLowerCase().includes(queryLower) ||
          row.status_fung.toLowerCase().includes(queryLower)
      );
    }

  // 2. Getter untuk menghitung total halaman
  public get totalPages(): number {
    return Math.ceil(this.filteredData.length / this.itemsPerPage);
  }


  // 3. Getter untuk mengambil data sesuai halaman saat ini
  public get paginatedData(): DataItem[] {
    console.log("Total Page", this.totalPages);
    console.log("Sekarang di Page", this.page);
    const startIndex = (this.page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }

  // --- EVENT HANDLER ---
  public onPageChange(newPage: number): void {
    this.page = newPage;

  }



}
