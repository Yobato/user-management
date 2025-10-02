import { Directive, OnInit } from "@angular/core";
import { ICrudService } from "../services/icrud.service";
import { FormRow } from "../components/forms/field.config";
import { ActivatedRoute, Router } from "@angular/router";

export type FormMode = 'create' | 'edit' | 'view' | 'tinjau';

export interface FormFactoryOptions<T> {
  mode: FormMode;
  data?: T;
  dependencies?: any;
}

export interface FormViewModel{
  config: FormRow[];
  formTitle: string;
  showSubmitButton: boolean;
  showCloseButton: boolean;
}

@Directive()
export abstract class BaseFormComponent<
  T extends{id: number},
  S extends ICrudService<T>
> implements OnInit {
  public vm: FormViewModel | null = null;
  public isDataReady = false;
  protected mode: FormMode = 'create';
  protected id: string | null = null;
  protected data: T | undefined;

  abstract formFactory: (options: FormFactoryOptions<T>) => FormViewModel;
  abstract listPath: string;

  constructor(
    protected router: Router,
    protected route: ActivatedRoute,
    protected dataService: S
  ){}

  ngOnInit(): void {
    this.mode = this.route.snapshot.data['mode'] as FormMode;
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void {
    if (this.id) {
      this.data = this.dataService.getById(+this.id);
      if (!this.data) {
        console.error('Data tidak ditemukan!');
        this.router.navigate([this.listPath]);
        return;
      }
    }
    this.vm = this.formFactory({ mode: this.mode, data: this.data });
    this.isDataReady = true;
  }

  onSubmit(formData: any): void {
    if (this.mode === 'create') {
      this.dataService.create(formData);
      alert('Data baru berhasil dibuat!');
      console.log('Data yang dikirim:', formData);
    } else if (this.mode === 'edit' || this.mode === 'tinjau') { // 'tinjau' diganti 'review' agar konsisten
      if (this.id) {
        this.dataService.update(+this.id, formData);
        alert(`Data dengan ID ${this.id} berhasil diupdate!`);
      }
    }
    this.router.navigate([this.listPath]);
  }

  onClose(): void {
    this.router.navigate([this.listPath]);
  }
}
