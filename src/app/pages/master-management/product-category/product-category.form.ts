import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/product-category.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form.page";

export interface ProductCategoryFormDependencies {
  productMasterOptions: { label: string; value: number }[];
}

export function getProductCategoryForm(options: FormFactoryOptions<DataItem>) : FormViewModel{
  const {mode, data, dependencies} = options;

  const deps = dependencies as ProductCategoryFormDependencies;

  const state = calculateFormState(mode, data?.status_approval);

  let productCategoryConfig: FormRow[] = [
    {
      fields: [
          {
            name: 'product_master_id',
            label: 'Product Master',
            type: 'select',
            options: deps.productMasterOptions,
            initialValue: null,
            validations: [{ name: 'required', message: 'Product Master wajib dipilih.' }]
          },
        ]
    },
     {
      fields: [
        {
          type: 'text',
          name: 'product_category_name',
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
          name: 'product_category_description',
          label: 'Deskripsi Produk',
          rows: 3,
          placeholder: "Masukkan deskripsi produk Anda",
          validations: [
              { name: 'required', message: 'Deskripsi Produk wajib diisi.' },
          ]
        }
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
          note: 'Tampilkan item ini di dalam list Product Category'
        },
      ]
    }

  let finalConfig = productCategoryConfig;
    if(data){
      const formData = {
        ...data,
        product_master_id: data.product_master_name?.id,
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
    formTitle: generateFormTitle(mode, 'Product Category'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  }
}
