import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/faq.service";

import { FormFactoryOptions, FormViewModel } from '../../base-form.page';


export function getFaqForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;
  const status = data?.status_approval;

  const isViewMode = mode === 'view';
  const isReviewMode = mode === 'tinjau';
  const isEditMode = mode === 'edit';
  const isCreateOrEdit = mode === 'create' || mode === 'edit';

  const fieldShouldBeDisabled = isViewMode;
  const allowFileClear = !isViewMode;
  const showReviewSection = isReviewMode || (isViewMode && (status === 'Rejected' || status === 'Sendback'));
  const showSubmitButton = isCreateOrEdit || isReviewMode;

  const formTitle = mode === 'create' ? 'Buat FAQ Baru' :
                    mode === 'edit' ? 'Ubah FAQ' :
                    mode === 'tinjau' ? 'Tinjau FAQ' : 'Lihat FAQ';

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

  let finalConfig = faqConfig;
    if(data){
      finalConfig = finalConfig.map(row => ({
        ...row,
        fields: row.fields.map(field =>{
          if(field.type === 'file'){
            return{
              ...field,
              initialValue: data[field.name as keyof DataItem],
              disabled: fieldShouldBeDisabled,
              allowClear: allowFileClear
            };
          }
          return{
            ...field,
            initialValue: data[field.name as keyof DataItem],
            disabled: fieldShouldBeDisabled,
          };
        })
      }));
    }

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

    if(isEditMode && data){
      finalConfig = [...finalConfig, visibilityField];
    }

    if(showReviewSection && data){
      const reviewSection: FormRow = {
        fields: [{
          type: 'display',
          name: 'reviewResultSection',
          renderType: 'status-section',
          label: '',
          data: {
            title: 'Hasil Review',
            statusLabel: 'Status',
            statusValue: data.status_approval,
            reasonLabel: 'Catatan Review',
            reasonValue: 'Mohon periksa kembali kelengkapan data.' // Ganti dengan data asli jika ada
          }
        }]
      };
      finalConfig.unshift(reviewSection);
    }

    return{
      config: finalConfig,
      formTitle: formTitle,
      showSubmitButton: showSubmitButton,
      showCloseButton: isViewMode,
    };
}
