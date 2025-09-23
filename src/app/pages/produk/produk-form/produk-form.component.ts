import { Component, OnInit } from '@angular/core';
import { FormMode, FormViewModel, getProdukForm } from '../produk.form';
import { DataItem, ProdukService } from '../../../services/produk.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produk-form',
  standalone: false,
  templateUrl: './produk-form.component.html',
  styleUrl: './produk-form.component.css'
})
export class ProdukFormPage implements OnInit {

  public vm: FormViewModel | null = null;
  public isDataReady = false;

  private mode: FormMode = 'create';
  private id: string | null = null;
  private produkData: DataItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produkService: ProdukService
  ){}

  ngOnInit(): void {
      this.mode = this.route.snapshot.data['mode'] as FormMode;
      this.id = this.route.snapshot.paramMap.get('id');

      this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void{
    if(this.id){
      this.produkData = this.produkService.getProductById(+this.id);
      if(!this.produkData){
        console.error('Produk tidak ditemukan');
        return;
      }
    }

    this.vm = getProdukForm({mode: this.mode,  data: this.produkData});
    this.isDataReady = true;
  }

  onSubmit(formData: any):void{
    console.log('Form disubmit dengan mode:', this.mode, formData);

    if(this.mode === 'create'){
      alert('Produk baru berhasil dibuat!');
    } else if(this.mode === 'edit' || this.mode === 'tinjau'){
      if(this.id){
        alert(`Produk dengan ID ${this.id} berhasil diupdate!`);
      }
    }

    this.router.navigate(['products']);
  }

  onClose():void{
    this.router.navigate(['/products']);
  }

}
