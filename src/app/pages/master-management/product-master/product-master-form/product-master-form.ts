import { Component } from '@angular/core';
import { getProductMasterForm } from '../product-master.form';
import { ActivatedRoute, Router } from '@angular/router';
import { DataItem, ProductMasterService } from '../../../../services/product-master.service';
import { BaseFormComponent } from '../../../base-form.page';

@Component({
  selector: 'app-product-master-form',
  standalone: false,
  templateUrl: './product-master-form.html',
  styleUrl: './product-master-form.css'
})
export class ProductMasterFormPage extends BaseFormComponent<DataItem, ProductMasterService> {

  formFactory = getProductMasterForm;
  listPath = '/master/product-master';

  constructor(
    router: Router,
    route: ActivatedRoute,
    productMasterService: ProductMasterService
  ){
    super(router, route, productMasterService)
  }
}
