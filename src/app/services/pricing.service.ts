import { Injectable } from '@angular/core';

export interface PricingData{
  id: number;
  product_name: string;
}

export interface DataItem{
  id: number;
  pricing_option: PricingData;
  pricing_code: string;
  pricing_name: string;
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
export class PricingService {
  pricingData: DataItem[] = [
    {
      id: 1,
      pricing_option: {
        id: 1,
        product_name: "BSI Griya"
      },
      pricing_code: "GRY-001",
      pricing_name: "Griya Reguler",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Approved",
      approver: "Budi Santoso",
      reason: "Deskripsi produk sudah sesuai dengan materi marketing terbaru.",
      is_visible: true,
    },
    {
      id: 2,
      pricing_option: {
        id: 1,
        product_name: "BSI Griya"
      },
      pricing_code: "GRY-002",
      pricing_name: "Griya Haji",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andika Wijaya",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Huja Andidaya",
      status_approval: "Pending",
      approver: "Budi Santoso",
      reason: "Deskripsi produk sudah sesuai dengan materi marketing terbaru.",
      is_visible: false,
    },
    {
      id: 3,
      pricing_option: {
        id: 1,
        product_name: "BSI Griya"
      },
      pricing_code: "GRY-003",
      pricing_name: "Griya Simuda",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Budi Santoso",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Citra Lestari",
      status_approval: "Sendback",
      approver: "Budi Santoso",
      reason: "Deskripsi produk sudah sesuai dengan materi marketing terbaru.",
      is_visible: false,
    },
    {
      id: 4,
      pricing_option: {
        id: 1,
        product_name: "BSI Griya"
      },
      pricing_code: "GRY-004",
      pricing_name: "Griya Subsidi",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Dewi Anggraini",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Dewi Anggraini",
      status_approval: "Rejected",
      approver: "Budi Santoso",
      reason: "Pricing tidak sesuai dengan PTO yang diterbitkan, No 22 tahun 2018.",
      is_visible: false,
    },
    {
      id: 5,
      pricing_option: {
        id: 2,
        product_name: "BSI OTO"
      },
      pricing_code: "OTO-001",
      pricing_name: "OTO Reguler",
      created_at: new Date("2025-09-20T09:00:00"),
      created_by: "Siti Marlina",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Andi Pratama",
      status_approval: "Approved",
      approver: "Budi Santoso",
      reason: "Produk sesuai kebijakan pembiayaan kendaraan terbaru.",
      is_visible: true,
    },
    {
      id: 6,
      pricing_option: {
        id: 3,
        product_name: "BSI Mitraguna"
      },
      pricing_code: "MTR-001",
      pricing_name: "Mitraguna Reguler",
      created_at: new Date("2025-09-20T09:30:00"),
      created_by: "Ahmad Fauzi",
      updated_at: new Date("2025-09-28T14:35:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Pending",
      approver: "Budi Santoso",
      reason: "Menunggu validasi dokumen PTO.",
      is_visible: false,
    },
    {
      id: 7,
      pricing_option: {
        id: 4,
        product_name: "BSI Cicil Emas"
      },
      pricing_code: "EMS-001",
      pricing_name: "Cicil Emas Reguler",
      created_at: new Date("2025-09-21T10:00:00"),
      created_by: "Nurhayati",
      updated_at: new Date("2025-09-28T14:40:00"),
      updated_by: "Citra Lestari",
      status_approval: "Sendback",
      approver: "Budi Santoso",
      reason: "Perlu penyesuaian tenor dan margin sesuai standar pasar.",
      is_visible: false,
    },
    {
      id: 8,
      pricing_option: {
        id: 5,
        product_name: "BSI Hasanah Card"
      },
      pricing_code: "HSC-001",
      pricing_name: "Hasanah Card Reguler",
      created_at: new Date("2025-09-22T11:00:00"),
      created_by: "Rudi Hartono",
      updated_at: new Date("2025-09-28T14:45:00"),
      updated_by: "Dewi Anggraini",
      status_approval: "Rejected",
      approver: "Budi Santoso",
      reason: "Syarat biaya tahunan tidak sesuai dengan PTO 2024.",
      is_visible: false,
    }
  ]
}
