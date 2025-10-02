import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/marital-status.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form.page";

export function getMaritalStatusForm(options: FormFactoryOptions<DataItem>): FormViewModel{
  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let productMasterConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'kode_marital_status',
          label: 'Kode Marital Status NOS',
          placeholder: 'Masukkan kode martial status NOS',
          validations: [
            { name: 'required', message: 'Kode Marital Status NOS wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Kode Marital Status NOS harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'text',
          name: 'nama_marital_status',
          label: 'Nama Marital Status NOS',
          placeholder: 'Masukkan nama martial status NOS',
          validations: [
            { name: 'required', message: 'Nama Marital Status NOS wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama Marital Status NOS harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
  ];

  const visibilityField: FormRow = {
    fields: [
      {
        type: 'toggle',
        name: 'visibility',
        label: 'Visibilitas',
        initialValue:data?.is_visible,
        note: 'Tampilkan item ini di dalam list Marital Status'
      },
    ]
  }

  let finalConfig = productMasterConfig;
    if(data){
      const processedConfig = populateInitialValues(productMasterConfig, data, state.fieldShouldBeDisabled);

      finalConfig = [
        ...(state.showReviewSection ? [createReviewSection(data)]: []),
        ...processedConfig,
        ...(state.isEditMode ? [visibilityField] : [])
      ]
    }

    return{
      config: finalConfig,
      formTitle: generateFormTitle(mode, 'Marital Status'),
      showSubmitButton: state.showSubmitButton,
      showCloseButton: state.showCloseButton,
    }
}
