import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/pricing.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form.page";

export interface PricingFormDependencies {
  productMasterOptions: { label: string; value: number }[];
}

export function getPricingForm(options: FormFactoryOptions<DataItem>) : FormViewModel{
  const {mode, data, dependencies} = options;

  const deps = dependencies as PricingFormDependencies;

  const state = calculateFormState(mode, data?.status_approval);

  let productCategoryConfig: FormRow[] = [
    {
      fields: [
          {
            name: 'pricing_option',
            label: 'Pricing Option',
            type: 'select',
            options: deps.productMasterOptions,
            initialValue: null,
            validations: [{ name: 'required', message: 'Pricing Option wajib dipilih.' }]
          },
        ]
    },
    {
      fields: [
        {
          type: 'text',
          name: 'pricing_code',
          label: 'Pricing Code',
          placeholder: 'Masukkan kode pricing',
          validations: [
            { name: 'required', message: 'Pricing Code wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Pricing Code harus lebih dari 2 karakter.' }
          ],
        },
        {
          type: 'text',
          name: 'pricing_name',
          label: 'Nama Pricing',
          placeholder: 'Masukkan nama pricing',
          validations: [
            { name: 'required', message: 'Nama Pricing wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama Pricing harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
  ]

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

  let finalConfig = productCategoryConfig;
    if(data){
      const formData = {
        ...data,
        pricing_option: data.pricing_option?.id,
      }

      const processedConfig = populateInitialValues(productCategoryConfig, formData, state.fieldShouldBeDisabled);

      finalConfig = [
        ...(state.showReviewSection ? [createReviewSection(data)]: []),
        ...processedConfig,
        ...(state.isEditMode ? [visibilityField] : [])
      ]

    }

  return {
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'Pricing'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  }
}
