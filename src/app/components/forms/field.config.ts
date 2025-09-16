export interface Option{
  value: string | number;
  label: string;
}

export interface ValidatorConfig{
  name: 'required' | 'requiredTrue' | 'email' | 'minLength' | 'maxLength' | 'pattern';
  value?: any;
  message: string;
}

export interface FieldConfig{
  name: string;
  label: string;
  type:
  | 'text'
  | 'textarea'
  | 'date'
  | 'checkbox'
  | 'toggle'
  | 'select'
  | 'file'
  | 'display';
  initialValue?: any;
  placeholder?: string;
  options?: Option[];
  validations?: ValidatorConfig[];
  rows?: number;
  note?: string;
  accept?: string;
  boxed?: boolean;
  keterangan?: string;
  data?: any;
  renderType?: 'status-section' | 'subtitle';
}

export interface FormRow{
  fields: FieldConfig[];
}
