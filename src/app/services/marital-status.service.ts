import { Injectable } from '@angular/core';

export interface DataItem{
  id: number;
  kode_marital_status: string;
  nama_marital_status: string;
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
export class MaritalStatusService {
  maritalStatusData: DataItem[] = [
    {
      id: 1,
      kode_marital_status: "MS-NOS-001",
      nama_marital_status: "Kawin",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Approved",
      approver: "Budi Santoso",
      reason: "Looks good to me",
      is_visible: true,
    },
    {
      id: 2,
      kode_marital_status: "MS-NOS-002",
      nama_marital_status: "Belum Kawin",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Pending",
      approver: "",
      reason: "",
      is_visible: false,
    },
    {
      id: 3,
      kode_marital_status: "MS-NOS-003",
      nama_marital_status: "Cerai Hidup Bang",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Sendback",
      approver: "Budi Santoso",
      reason: "Kita ikutin aturan status kawin di KTP aja ya",
      is_visible: false,
    },
    {
      id: 4,
      kode_marital_status: "MS-NOS-004",
      nama_marital_status: "Cerai Mati ajajajajajajajaja",
      created_at: new Date("2025-09-15T10:00:00"),
      created_by: "Andi Pratama",
      updated_at: new Date("2025-09-28T14:30:00"),
      updated_by: "Rina Wijaya",
      status_approval: "Rejected",
      approver: "Budi Santoso",
      reason: "Yang benerlah kalau mau bikin status cerai mati",
      is_visible: false,
    },
  ];

  getById(id: number): DataItem | undefined{
    return this.maritalStatusData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }


  getAllMaritalStatusData(): DataItem[]{
    return this.maritalStatusData
  }
}
