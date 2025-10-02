import { Component } from '@angular/core';
import { BaseFormComponent, FormFactoryOptions } from '../../../base-form.page';
import { DataItem, ProductCategoryService } from '../../../../services/product-category.service';
import { getProductCategoryForm } from '../product-category.form';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMasterService } from '../../../../services/product-master.service';

@Component({
  selector: 'app-product-category-form',
  standalone: false,
  templateUrl: './product-category-form.html',
  styleUrl: './product-category-form.css'
})
export class ProductCategoryFormPage extends BaseFormComponent<DataItem, ProductCategoryService> {

  listPath = '/master/product-category';

  private productMasterOptions: { value: number; label: string }[] = [];

  formFactory = (options: FormFactoryOptions<DataItem>) => {
    return getProductCategoryForm({
      ...options,
      dependencies: {
        productMasterOptions: this.productMasterOptions
      }
    });
  };

  constructor(
    router: Router,
    route: ActivatedRoute,
    productCategoryService: ProductCategoryService,
    private productMasterService: ProductMasterService
  ){
    super(router, route, productCategoryService);
    this.loadDependencies();
  }

  private loadDependencies(): void {
    const masterData = this.productMasterService.getAllProductMasterData();
    this.productMasterOptions = masterData.map(item => ({
      value: item.id,
      label: item.product_name
    }));
  }
}
