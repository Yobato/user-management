import { Component } from '@angular/core';
import { BaseFormComponent, FormFactoryOptions } from '../../../base-form.page';
import { DataItem, PricingService } from '../../../../services/pricing.service';
import { getPricingForm } from '../pricing.form';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMasterService } from '../../../../services/product-master.service';

@Component({
  selector: 'app-pricing-form',
  standalone: false,
  templateUrl: './pricing-form.html',
  styleUrl: './pricing-form.css'
})
export class PricingFormPage extends BaseFormComponent<DataItem, PricingService> {

  listPath = '/master/pricing';

  private productMasterOptions: { value: number; label: string }[] = [];

  formFactory = (options: FormFactoryOptions<DataItem>) => {
    return getPricingForm({
      ...options,
      dependencies: {
        productMasterOptions: this.productMasterOptions
      }
    });
  };

  constructor(
    router: Router,
    route: ActivatedRoute,
    pricingService: PricingService,
    private productMasterService: ProductMasterService
  ){
    super(router, route, pricingService);
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
