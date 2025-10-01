import { FormRow } from "../../components/forms/field.config";
import { DataItem } from "../../services/promo.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../utils/form.helpers";

import { FormFactoryOptions, FormViewModel } from '../base-form.page';

export function getPromoForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let baseConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'select',
          name: 'kategori',
          label: 'Kategori Produk',
          options: [
            { value: 'reguler', label: 'BSI Griya Reguler' },
            { value: 'simuda', label: 'BSI Griya Srimuda' },
            { value: 'haji', label: 'BSI Griya Haji' }
          ],
          initialValue: null,
          validations: [
            { name: 'required', message: 'Kategori wajib dipilih.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'text',
          name: 'judul',
          label: 'Judul Program',
          placeholder: 'Masukkan judul program',
          validations: [
            { name: 'required', message: 'Judul Program wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Judul harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'deskripsi',
          label: 'Deskripsi Promo',
          rows: 4,
          placeholder: "Masukkan deskripsi promo Anda",
          validations: [
              { name: 'required', message: 'Deskripsi wajib diisi.' },
          ]
        }
      ]
    },
    {
      fields: [
        {
          type: 'file',
          name: 'promo_image', // Nama harus unik
          label: 'Gambar Promo',
          validations: [
            { name: 'required', message: 'Gambar harus diisi.' }
          ],
          accept: 'image/*',
          note: 'Maksimum ukuran file 2MB.'
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
        initialValue:data?.status_fung,
        note: 'Tampilkan item ini di dalam list Promo'
      },
    ]
  }

  let finalConfig = baseConfig;
  if(data){
    const processedConfig = populateInitialValues(baseConfig, data, state.fieldShouldBeDisabled);

    finalConfig = [
      ...(state.showReviewSection ? [createReviewSection(data)]: []),
      ...processedConfig,
      ...(state.isEditMode ? [visibilityField] :[])
    ]
  }

  return{
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'Promo'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  };
}

