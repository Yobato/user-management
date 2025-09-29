import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/faq.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";

import { FormFactoryOptions, FormViewModel } from '../../base-form.page';


export function getFaqForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let faqConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'question',
          label: 'Pertanyaan',
          placeholder: 'Masukkan pertanyaan',
          validations: [
            { name: 'required', message: 'Pertanyaan wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Pertanyaan harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'answer',
          label: 'Jawaban',
          rows: 3,
          placeholder: "Masukkan jawaban Anda",
          validations: [
              { name: 'required', message: 'Jawaban wajib diisi.' },
          ]
        }
      ]
    },
    {
      fields: [
        {
          type: 'select',
          name: 'kategori',
          label: 'Kategori Produk',
          options: [
            { value: 'Akad & Prinsip Syariah', label: 'Akad & Prinsip Syariah' },
            { value: 'Biaya & Angsuran', label: 'Biaya & Angsuran' },
            { value: 'Produk & Skema', label: 'Produk & Skema' },
            { value: 'Proses Pengajuan', label: 'Proses Pengajuan' },

          ],
          initialValue: null,
          validations: [
            { name: 'required', message: 'Kategori wajib dipilih.' }
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
        note: 'Tampilkan item ini di dalam list Artikel'
      },
    ]
  }

  let finalConfig = faqConfig;
    if(data){
      const processedConfig = populateInitialValues(faqConfig, data, state.fieldShouldBeDisabled);

      finalConfig = [
        ...(state.showReviewSection ? [createReviewSection(data)]: []),
        ...processedConfig,
        ...(state.isEditMode ? [visibilityField] :[])
      ]
    }


  return{
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'FAQ'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  };
}
