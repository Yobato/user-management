import { Component, OnInit } from '@angular/core';
import { getProdukForm } from '../produk.form';
import { DataItem, ProdukService } from '../../../services/produk.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from '../../base-form.page';

@Component({
  selector: 'app-produk-form',
  standalone: false,
  templateUrl: './produk-form.component.html',
  styleUrl: './produk-form.component.css'
})
export class ProdukFormPage extends BaseFormComponent<DataItem, ProdukService> {

  formFactory = getProdukForm;
  listPath = 'products';

  constructor(
    router: Router,
    route: ActivatedRoute,
    produkService: ProdukService
  ){
    super(router, route, produkService)
  }
}
