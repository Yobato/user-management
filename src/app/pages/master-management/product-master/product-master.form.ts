import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/product-master.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form.page";

export function getProductMasterForm(options: FormFactoryOptions<DataItem>): FormViewModel{
  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let productMasterConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'product_name',
          label: 'Nama Produk',
          placeholder: 'Masukkan nama produk',
          validations: [
            { name: 'required', message: 'Nama Produk wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama Produk harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'product_description',
          label: 'Deskripsi Produk',
          rows: 3,
          placeholder: "Masukkan deskripsi produk Anda",
          validations: [
              { name: 'required', message: 'Deskripsi Produk wajib diisi.' },
          ]
        }
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
        note: 'Tampilkan item ini di dalam list Product Master'
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
      formTitle: generateFormTitle(mode, 'Product Master'),
      showSubmitButton: state.showSubmitButton,
      showCloseButton: state.showCloseButton,
    }
}
