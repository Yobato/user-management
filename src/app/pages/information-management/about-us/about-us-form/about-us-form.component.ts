import { Component } from '@angular/core';
import { FormMode, FormViewModel, getAboutUsFormConfig } from '../about-us.form';
import { AboutUsService, DataItem } from '../../../../services/about-us.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us-form',
  standalone: false,
  templateUrl: './about-us-form.component.html',
  styleUrl: './about-us-form.component.css'
})
export class AboutUsFormPage {

  public vm: FormViewModel | null = null;
  public isDataReady = false;

  private mode: FormMode = 'edit'; // Mode default
  private aboutUsData: DataItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aboutUsService: AboutUsService
  ) {}

  ngOnInit(): void {
    // Baca 'mode' dari data routing yang kita definisikan
    this.mode = this.route.snapshot.data['mode'] as FormMode || 'edit';

    this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void {
    // Karena 'About Us' hanya ada satu, kita selalu mengambil data
    this.aboutUsData = this.aboutUsService.getAboutUs();

    if (!this.aboutUsData) {
      console.error('Data About Us tidak ditemukan!');
      // Arahkan ke halaman dashboard jika data tidak ada
      this.router.navigate(['/home']);
      return;
    }

    // Panggil "pabrik" untuk membuat ViewModel berdasarkan mode dan data
    this.vm = getAboutUsFormConfig({ mode: this.mode, data: this.aboutUsData });
    this.isDataReady = true;
  }

  onSubmit(formData: any): void {
    console.log('Form disubmit dengan mode:', this.mode, formData);

    // Karena tidak ada 'create', kita selalu meng-update data
    this.aboutUsService.updateAboutUs(formData);
    alert(`Data "About Us" berhasil diupdate!`);

    // Arahkan kembali ke halaman list/view setelah submit
    this.router.navigate(['/informasi/about-us']);
  }

  onClose(): void {
    // Arahkan kembali ke halaman list/view
    this.router.navigate(['/informasi/about-us']);
  }

}
