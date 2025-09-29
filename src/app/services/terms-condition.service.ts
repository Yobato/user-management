import { Injectable } from '@angular/core';
import { ISingletonDataService } from './isingleton-data';

export interface DataItem{
  id: number;
  label_name: string;
  deskripsi: string;
  approver: string;
  updated_at: Date;
  status_approval: string;
  reason: string;
  is_visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TermsConditionService implements ISingletonDataService<DataItem> {

  termconditionData: DataItem =
    {
      id: 1,
      label_name: "Saya siap dengan segala konsekuensi yang timbul atas investasi ini.",
      deskripsi: "Lorem ipsum color donor sit amet wakuazcad qpoialx azasd manzxcaq kasdiqpojf zaolqwo hasjdl",
      approver: "Admin Utama",
      updated_at: new Date("2025-09-26T10:00:00"),
      status_approval: "Rejected",
      reason: "Konten sudah baik dan sesuai SOP",
      is_visible: true,
    }


  get(): DataItem{
    return this.termconditionData;
  }

  update(updatedData: DataItem): void {
    this.termconditionData = {...this.termconditionData, ...updatedData};
    console.log("Data Terms and Condition berhasil diperbarui:", this.termconditionData);
  }
}
