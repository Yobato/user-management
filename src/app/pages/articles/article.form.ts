import { FormRow } from "../../components/forms/field.config";
import { DataItem } from "../../services/articles.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../utils/form.helpers";

import { FormFactoryOptions, FormViewModel } from '../base-form.page';

export function getArticlesForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let baseConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'judul',
          label: 'Judul Article',
          placeholder: 'Masukkan judul article',
          validations: [
            { name: 'required', message: 'Judul Article wajib diisi.' },
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
          label: 'Deskripsi Article',
          rows: 4,
          placeholder: "Masukkan deskripsi article Anda",
          validations: [
              { name: 'required', message: 'Deskripsi wajib diisi.' },
          ]
        }
      ]
    },

    {
      fields: [
        {
          type: 'text',
          name: 'refrensi',
          label: 'Refrensi Article',
          placeholder: 'Masukkan link refrensi article',
          validations: [
            { name: 'required', message: 'Refrensi Artikel wajib diisi.' },
            { name: 'minLength', value: 5, message: 'Link minimal 5 karakter.' }
          ],
        },
      ]
    },

    {
      fields: [
        {
          type: 'file',
          name: 'artikel_image', // Nama harus unik
          label: 'Gambar Artikel',
          validations: [
            { name: 'required', message: 'Gambar harus diisi.' }
          ],
          accept: 'image/*',
          note: 'Maksimum ukuran file 2MB.'
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
          type: 'toggle',
          name: 'highlight',
          label: 'Jadikan Artikel Sorotan',
          note: 'Artikel ini akan ditampilkan di bagian utama halaman Artikel.'
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
        note: 'Tampilkan item ini di dalam list Artikel'
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
    formTitle: generateFormTitle(mode, 'Artikel'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  };
}

