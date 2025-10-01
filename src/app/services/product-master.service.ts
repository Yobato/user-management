import { Injectable } from '@angular/core';

export interface DataItem{
  id: number;
  product_name: string;
  product_description: string;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  status_approval: string;
  approver: string;
  reason: string;
  is_visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductMasterService {

  productMasterData: DataItem[] = [
    {
      id: 1,
      product_name: "BSI Griya",
      product_description: "Pembiayaan kepemilikan rumah, apartemen, atau ruko dengan prinsip syariah Murabahah (jual beli) dan angsuran tetap.",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Approved",
      approver: "Budi Santoso",
      reason: "Deskripsi produk sudah sesuai dengan materi marketing terbaru.",
      is_visible: true, // Status 'Approved', jadi bisa 'true'
    },
    {
      id: 2,
      product_name: "BSI OTO",
      product_description: "Solusi pembiayaan kendaraan bermotor (mobil atau motor) baru maupun bekas dengan akad Murabahah.",
      created_at: new Date("2025-10-01T09:00:00"),
      created_by: "Citra Lestari",
      updated_at: new Date("2025-10-01T09:00:00"),
      updated_by: "Citra Lestari",
      status_approval: "Pending",
      approver: "", // Belum ada approver
      reason: "", // Masih menunggu review
      is_visible: false, // Status bukan 'Approved'
    },
    {
      id: 3,
      product_name: "BSI Mitraguna",
      product_description: "Pembiayaan multiguna untuk berbagai kebutuhan konsumtif seperti pendidikan, perjalanan ibadah, atau renovasi rumah.",
      created_at: new Date("2025-09-20T11:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-25T16:00:00"),
      updated_by: "Budi Santoso",
      status_approval: "Sendback",
      approver: "Budi Santoso",
      reason: "Mohon tambahkan detail mengenai agunan yang diperlukan untuk produk ini.",
      is_visible: false, // Status bukan 'Approved'
    },
    {
      id: 4,
      product_name: "BSI Cicil Emas",
      product_description: "Layanan kepemilikan emas batangan Logam Mulia dengan cara mencicil sesuai prinsip syariah.",
      created_at: new Date("2025-09-22T08:00:00"),
      created_by: "Citra Lestari",
      updated_at: new Date("2025-09-24T10:00:00"),
      updated_by: "Dewi Anggraini",
      status_approval: "Rejected",
      approver: "Dewi Anggraini",
      reason: "Produk ini akan digabungkan dengan 'Gadai Emas', tidak perlu entri terpisah.",
      is_visible: false, // Status bukan 'Approved'
    },
    {
      id: 5,
      product_name: "BSI Hasanah Card",
      product_description: "Kartu pembiayaan syariah yang berfungsi seperti kartu kredit untuk berbagai transaksi halal di dalam dan luar negeri.",
      created_at: new Date("2025-08-30T15:00:00"),
      created_by: "Rina Wijaya",
      updated_at: new Date("2025-09-29T11:45:00"),
      updated_by: "Budi Santoso",
      status_approval: "Approved",
      approver: "Budi Santoso",
      reason: "Konten sudah divalidasi.",
      is_visible: true, // Status 'Approved', jadi bisa 'true'
    },
  ]

  getById(id: number): DataItem | undefined{
    return this.productMasterData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }


  getAllProductMasterData(): DataItem[]{
    return this.productMasterData
  }

}
