import { FormRow } from "../../components/forms/field.config";
import { DataItem } from "../../services/produk.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../utils/form.helpers";

import { FormFactoryOptions, FormViewModel } from '../base-form.page';

export function getProdukForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let baseConfigProduk: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'nama_produk',
          label: 'Nama Produk',
          placeholder: 'Masukkan nama produk',
          validations: [
            { name: 'required', message: 'Nama Produk wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'select',
          name: 'jenis_produk',
          label: 'Jenis Produk',
          options: [
            { value: 'griya', label: 'Griya' },
            { value: 'griya_subsidi', label: 'Griya Subsidi' }
          ],
          initialValue: null,
          validations: [
            { name: 'required', message: 'Peran wajib dipilih.' }
          ]
        },
      ]
    },
    {
      fields: [
        {
          type: 'select',
          name: 'kategori',
          label: 'Kategori Produk',
          options: [
            { value: 'reguler', label: 'BSI Griya Reguler' },
            { value: 'srimuda', label: 'BSI Griya Srimuda' },
            { value: 'haji', label: 'BSI Griya Haji' }
          ],
          initialValue: null,
          validations: [
            { name: 'required', message: 'Peran wajib dipilih.' }
          ]
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'detail',
          label: 'Detail Produk',
          rows: 4,
          placeholder: "Masukkan detail produk Anda",
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
          name: 'produk_image', // Nama harus unik
          label: 'Foto Produk',
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
        name: 'is_visible',
        label: 'Visibilitas',
        note: 'Tampilkan item ini di dalam list Product'
      },
    ]
  }

  let finalConfig = baseConfigProduk;
  if(data){
    const processedConfig = populateInitialValues(baseConfigProduk, data, state.fieldShouldBeDisabled);

    finalConfig = [
      ...(state.showReviewSection ? [createReviewSection(data)]: []),
      ...processedConfig,
      ...(state.isEditMode ? [visibilityField] :[])
    ]
  }

  return{
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'Produk'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  }
}
