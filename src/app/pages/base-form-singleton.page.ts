import { Directive, OnInit } from "@angular/core";
import { FormRow } from "../components/forms/field.config";
import { ActivatedRoute, Router } from "@angular/router";
import { ISingletonDataService } from "../services/isingleton-data";

export type FormMode = 'edit' | 'view' | 'tinjau';

export interface FormFactoryOptions<T>{
  mode: FormMode;
  data?: T;
}

export interface FormViewModel{
  config: FormRow[];
  formTitle: string;
  showSubmitButton: boolean;
  showCloseButton: boolean;
}

@Directive()
export abstract class BaseFormSingletonComponent<T, S extends ISingletonDataService<T>> implements OnInit{

  public vm: FormViewModel | null = null;
  public isDataReady = false;
  protected mode: FormMode = 'edit';
  protected data: T | undefined;

  abstract formFactory: (options: FormFactoryOptions<T>) => FormViewModel;
  abstract listPath: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: S
  ) {}

  ngOnInit(): void {
    this.mode = this.route.snapshot.data['mode'] as FormMode || 'edit';
    this.loadDataAndBuildForm();
  }

  private loadDataAndBuildForm(): void{
    this.data = this.dataService.get();

    if(!this.data){
      console.error('Data tidak ditemukan!');
      this.router.navigate(['/home']);
      return;
    }

    this.vm = this.formFactory({mode: this.mode, data: this.data});
    this.isDataReady = true;
  }

  onSubmit(formData: any): void {
    this.dataService.update(formData);
    alert('Data berhasil diupdate!');
    this.router.navigate([this.listPath]);
  }

  onClose(): void {
    this.router.navigate([this.listPath]);
  }
}
