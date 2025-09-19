import { CommonModule } from '@angular/common';
import { Component, ElementRef, forwardRef, Injector, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Eye, FileIcon, LucideAngularModule, X } from 'lucide-angular';
import { ValidatorConfig } from '../../field.config';

@Component({
  selector: 'app-file-input',
  standalone: false,
  templateUrl: './file-input.html',
  styleUrl: './file-input.css',
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(()=> FileInputComponent), multi: true}]
})

export class FileInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() label: string = '';
  @Input() validations: ValidatorConfig[] = [];
  @Input() note: string = '';
  @Input() accept: string = '*';
  @Input() boxed: boolean = false;
  @Input() keterangan: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  readonly FileIcon = FileIcon;
  readonly EyeIcon = Eye;
  readonly XIcon = X;

  public ngControl!: NgControl;

  currentValue: File | string | null = null;
  previewUrl: SafeUrl | null = null;
  objectUrl: string | null = null;

  disabled: boolean = false;
  onChange: (value: File | string | null) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private injector: Injector, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
      this.ngControl = this.injector.get(NgControl);
  }

  ngOnDestroy(): void {
    this.revokeObjectUrl();
  }

  private revokeObjectUrl(): void {
    if (this.objectUrl) {
      URL.revokeObjectURL(this.objectUrl);
      this.objectUrl = null;
    }
  }

  // Logika Handle Handle

  handleFileChange(event: Event): void{
    const file = (event.target as HTMLInputElement).files?.[0] || null;
    this.onChange(file);
    this.writeValue(file);
    this.onTouched();
  }

  handleClearFile(): void{
    // console.log("Ini this.fileInput", this.fileInput.nativeElement.value);
    if(this.fileInput){
      this.fileInput.nativeElement.value = '';
    }
    this.onChange(null);
    this.writeValue(null);
    this.onTouched();
  }

  handleViewFile(): void{
    if(!this.previewUrl || !this.currentValue) return;

    if(this.currentValue instanceof File){
      const fileType = this.currentValue.type;

      // Cek typenya
      if(fileType.startsWith('image/') || fileType === 'application/pdf'){
        window.open(this.objectUrl as string, '_blank');
      } else{
        const link = document.createElement('a');
        link.href = this.objectUrl as string;
        link.download = this.currentValue.name;
        link.click();
      }
    } else if(typeof this.currentValue === 'string'){
      window.open(this.currentValue, '_blank');
    }
  }

  // Di dalam FileInputComponent

  public get displayFileName(): string {
    // Kasus 1: Nilai kosong/null
    if (!this.currentValue) {
      return 'No file selected.';
    }

    // Kasus 2: Nilai adalah File object (pengguna baru memilih file)
    if (this.currentValue instanceof File) {
      return `${this.currentValue.name} (${(this.currentValue.size / 1024).toFixed(1)} KB)`;
    }

    // Kasus 3: Nilai adalah string (data awal dari database/URL)
    if (typeof this.currentValue === 'string' && this.currentValue) {
      let finalName = '';

      // Pola untuk mendeteksi ekstensi file gambar yang umum
      const imageExtensionsRegex = /\.(jpeg|jpg|png|gif|webp|svg)$/i;

      try {
        // Cek apakah URL diakhiri dengan ekstensi gambar
        if (imageExtensionsRegex.test(this.currentValue)) {
          // Jika YA, ambil nama filenya (contoh: pexels-photo-106399.jpeg)
          const urlParts = this.currentValue.split('/');
          finalName = urlParts[urlParts.length - 1].split('?')[0]; // Ambil nama file & hapus query params
        } else {
          // Jika TIDAK (seperti URL picsum), ambil nama domainnya sebagai fallback
          finalName = new URL(this.currentValue).hostname; // Contoh: picsum.photos
        }
      } catch (e) {
        // Jika string bukan URL valid, tampilkan apa adanya
        finalName = this.currentValue;
      }

      // Tambahkan prefix "File tersimpan:" untuk semua kasus string
      return `File tersimpan: ${finalName}`;
    }

    // Fallback terakhir jika tipe data tidak dikenali
    return 'Invalid file data.';
  }

  isRequired(): boolean{
    return this.validations.some(v => v.name === 'required');
  }

  // --- BoilerPlate ControlValueAccessor ---
  writeValue(value: File | string | null): void {
    this.currentValue = value;
    this.revokeObjectUrl();

    if(value instanceof File){
      this.objectUrl = URL.createObjectURL(value);
      this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(this.objectUrl);
    } else if(typeof value === 'string' && value){
      this.previewUrl = value;
    } else {
      this.previewUrl = null;
    }
  }

  registerOnChange(fn: any): void {this.onChange = fn}
  registerOnTouched(fn: any): void {this.onTouched = fn}
  setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

}
