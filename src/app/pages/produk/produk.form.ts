import { FormRow } from "../../components/forms/field.config";
import { DataItem } from "../../services/produk.service";

export type FormMode = 'create' | 'edit' | 'view' | 'tinjau';

export interface FormFactoryOptions{
  mode: FormMode;
  data?: DataItem;
}

export interface FormViewModel{
  config: FormRow[];
  formTitle: string;
  showSubmitButton: boolean;
  showCloseButton: boolean;
}

export function getProdukForm(options: FormFactoryOptions): FormViewModel{

  const {mode, data} = options;
  const status = data?.status_approval;

  const isViewMode = mode === 'view';
  const isReviewMode = mode === 'tinjau';
  const isCreateOrEdit = mode === 'create' || mode === 'edit';

  const fieldShouldBeDisabled = isViewMode;
  const allowFileClear = !isViewMode;
  const showReviewSection = isReviewMode || (isViewMode && (status === 'Rejected' || status === 'Sendback'));
  const showSubmitButton = isCreateOrEdit || isReviewMode;

  const formTitle = mode === 'create' ? 'Buat Produk Baru' :
                    mode === 'edit' ? 'Ubah Produk' :
                    mode === 'tinjau' ? 'Tinjau Produk' : 'Lihat Produk';

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

  let finalConfigProduk = baseConfigProduk;
  if(data){
    finalConfigProduk = finalConfigProduk.map(row => ({
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
          reasonValue: 'Nama Produk belum syariah brodie.' // Ganti dengan data asli jika ada
        }
      }]
    };
    finalConfigProduk.unshift(reviewSection);
  }

  return{
    config: finalConfigProduk,
    formTitle: formTitle,
    showSubmitButton: showSubmitButton,
    showCloseButton: isViewMode,
  }
}
