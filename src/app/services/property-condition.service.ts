import { Injectable } from '@angular/core';

export interface DataItem{
  id: number;
  nama_property_condition: string;
  deskripsi_property_condition: string;
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
export class PropertyConditionService {
  conditionPropertyData: DataItem[] = [
    {
      id: 1,
      nama_property_condition: "Rumah",
      deskripsi_property_condition: "Rumah huni",
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
      nama_property_condition: "Tanah",
      deskripsi_property_condition: "Tanah hak milik",
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
      nama_property_condition: "Apartement",
      deskripsi_property_condition: "Apartement pribadi",
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
      nama_property_condition: "Ruko",
      deskripsi_property_condition: "Ruko kontrakan minimal 3 tahun",
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
    return this.conditionPropertyData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }


  getAllPropertyConditionData(): DataItem[]{
    return this.conditionPropertyData
  }
}
