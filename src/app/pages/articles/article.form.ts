import { FormRow } from "../../components/forms/field.config";
import { DataItem } from "../../services/articles.service";

export type FormMode = 'create' | 'edit' | 'view' | 'tinjau';

export interface FormFactoryOptions {
  mode: FormMode;
  data?: DataItem;
}

export interface FormViewModel{
  config: FormRow[];
  formTitle: string;
  showSubmitButton: boolean;
  showCloseButton: boolean;
}

export function getArticlesForm(options: FormFactoryOptions): FormViewModel{

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

  const formTitle = mode === 'create' ? 'Buat Artikel Baru' :
                    mode === 'edit' ? 'Ubah Artikel' :
                    mode === 'tinjau' ? 'Tinjau Artikel' : 'Lihat Artikel';

  let baseConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'judul',
          label: 'Judul Article',
          placeholder: 'Masukkan judul article',
          validations: [
            { name: 'required', message: 'Nama Lengkap wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama harus lebih dari 2 karakter.' }
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
            { name: 'required', message: 'Peran wajib dipilih.' }
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

  let finalConfig = baseConfig;
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

