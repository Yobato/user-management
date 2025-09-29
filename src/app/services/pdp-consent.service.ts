import { Injectable } from '@angular/core';

export interface DataItem {
  id: number;
  detail: string;
  is_mandatory: boolean;
  approver: string;
  updated_at: Date;
  status_approval: string;
  reason: string;
  is_visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PdpConsentService {

  pdpConsentData: DataItem[] = [
    {
      id:1,
      detail: "Saya siap dengan segala konsekuensi yang timbul atas investasi ini.",
      is_mandatory: true,
      approver: "Admin Utama",
      updated_at: new Date("2025-09-26T10:00:00"),
      status_approval: "Approved",
      reason: "Konten sudah baik dan sesuai SOP",
      is_visible: true
    },
    {
      id:2,
      detail: "Saya tidak bersedia menjadi partner.",
      is_mandatory: true,
      approver: "Admin Utama",
      updated_at: new Date("2025-09-26T10:00:00"),
      status_approval: "Rejected",
      reason: "Konten tidak sesuai dengan peraturan dan SOP",
      is_visible: false
    },
    {
      id:3,
      detail: "Bla bla bla bla bla bla bla bla bla bla.",
      is_mandatory: false,
      approver: "Admin Utama",
      updated_at: new Date("2025-09-26T10:00:00"),
      status_approval: "Pending",
      reason: "",
      is_visible: false
    },
    {
      id:4,
      detail: "PDP ini dibuat dengan sebenar-benarnya sesuai dengan kondisi saya saat ini.",
      is_mandatory: true,
      approver: "Admin Utama",
      updated_at: new Date("2025-09-26T10:00:00"),
      status_approval: "Sendback",
      reason: "PDP ini dari sisi BSI bro",
      is_visible: false
    },
  ]

  getById(id: number): DataItem | undefined{
    return this.pdpConsentData.find(item => item.id === id);
  }

  create(data: Partial<DataItem>): void { /* ... */ }

  update(id: number, data: Partial<DataItem>): void { /* ... */ }


  getAllPdpConsent(): DataItem[]{
    return this.pdpConsentData
  }
}
