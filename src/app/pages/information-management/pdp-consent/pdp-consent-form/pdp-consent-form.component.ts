import { Component } from '@angular/core';
import { FormMode, FormViewModel, getPdpConsentForm } from '../pdp-consent.form';
import { DataItem, PdpConsentService } from '../../../../services/pdp-consent.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pdp-consent-form',
  standalone: false,
  templateUrl: './pdp-consent-form.component.html',
  styleUrl: './pdp-consent-form.component.css'
})
export class PdpConsentFormPage {
  public vm: FormViewModel | null = null;
  public isDataReady = false;

  private mode: FormMode = 'create';
  private id: string | null = null;
  private pdpConsentData: DataItem | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pdpConsentService: PdpConsentService
  ){}

  ngOnInit(): void{
    this.mode = this.route.snapshot.data['mode'] as FormMode;
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void{
    if(this.id){
      this.pdpConsentData = this.pdpConsentService.getPdpConsentById(+this.id);
      if(!this.pdpConsentData){
        console.log('PDP Consent tidak ditemukan');
        return;
      }
    }
    this.vm = getPdpConsentForm({mode: this.mode, data: this.pdpConsentData});
    this. isDataReady = true
  }

  onSubmit(formData: any): void{
    console.log('Form disubmit dengan mode:', this.mode, formData);

    if(this.mode === 'create'){
      alert('PDP Consent baru berhasil dibuat!');
    } else if(this.mode === 'edit' || this.mode === 'tinjau'){
      if(this.id){
        alert(`PDP Consent dengan ID ${this.id} berhasil diupdate!`);
      }
    }

    this.router.navigate(['/informasi/pdp-consent']);
  }

  onClose(): void {
  this.router.navigate(['/informasi/pdp-consent']);
  }




}
