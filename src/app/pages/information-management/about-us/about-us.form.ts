import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/about-us.service";


// Definisikan mode yang didukung untuk form ini
export type FormMode = 'edit' | 'view' | 'review';

// Definisikan "paket pesanan" yang akan diterima pabrik
export interface FormFactoryOptions {
  mode: FormMode;
  data: DataItem; // Data selalu dibutuhkan karena tidak ada mode 'create'
}

// Definisikan "paket hasil" yang akan dikirim pabrik
export interface FormViewModel {
  config: FormRow[];
  formTitle: string;
  showSubmitButton: boolean;
  showCloseButton: boolean;
}

/**
 * Pabrik cerdas untuk membuat konfigurasi form "About Us"
 * berdasarkan mode dan data awal.
 */
export function getAboutUsFormConfig(options: FormFactoryOptions): FormViewModel {
  const { mode, data } = options;
  const status = data?.status_approval;

  // 1. Definisikan semua aturan sebagai flags yang mudah dibaca
  const isEditMode = mode === 'edit';
  const isReviewMode = mode === 'review';
  const isViewMode = mode === 'view';
  const isRejected = status === 'Rejected';

  const fieldsShouldBeDisabled = isViewMode;
  const showReviewSection = isReviewMode || (isViewMode && isRejected);
  const showSubmitButton = isEditMode || isReviewMode;
  const visibilityToggleShouldBeDisabled = isReviewMode;

  // 2. Judul dinamis berdasarkan mode
  const formTitle = isEditMode ? 'Ubah About Us' :
                    isReviewMode ? 'Tinjau About Us' : 'Lihat About Us';

  // 3. Konfigurasi dasar untuk semua field form
  const baseConfig: FormRow[] = [
    {
      fields: [
        { name: 'label_name', label: 'Nama Label', type: 'text' }
      ]
    },
    {
      fields: [
        { name: 'image_logo', label: 'Logo Perusahaan', type: 'file', note: 'Ukuran maks. 500KB' }
      ]
    },
    {
      fields: [
        { name: 'deskripsi', label: 'Deskripsi', type: 'textarea', rows: 5 }
      ]
    },
    {
      fields: [
        { name: 'visi', label: 'Visi', type: 'textarea', rows: 4 },
        { name: 'misi', label: 'Misi', type: 'textarea', rows: 4 }
      ]
    },
    {
      fields: [
        { name: 'image_structure', label: 'Gambar Struktur Organisasi', type: 'file' }
      ]
    }
  ];

  // Field 'visibility' yang hanya muncul di mode tertentu
  const visibilityField: FormRow = {
    fields: [
      {
        name: 'visibility',
        label: 'Visibilitas',
        note: 'Tampilkan item ini di dalam list About Us',
        type: 'toggle',
        disabled: visibilityToggleShouldBeDisabled // Akan nonaktif jika mode 'review'
      }
    ]
  };

  // Section review yang hanya muncul di mode tertentu
  const reviewSection: FormRow = {
    fields: [{
      type: 'display',
      name: 'reviewResultSection',
      renderType: 'status-section',
      label: '',
      data: {
        title: 'Hasil Review',
        statusLabel: 'Status',
        statusValue: status,
        reasonLabel: 'Catatan Review',
        reasonValue: data.reason
      }
    }]
  };

  // 4. Proses Modifikasi: Isi nilai awal dan atur status disabled
  const processedConfig = baseConfig.map(row => ({
    ...row,
    fields: row.fields.map(field => {
      const value = data[field.name as keyof DataItem];
      // Aturan khusus untuk file input (tombol X)
      if (field.type === 'file') {
        return {
          ...field,
          initialValue: value,
          disabled: fieldsShouldBeDisabled,
          allowClear: !isViewMode
        };
      }
      return {
        ...field,
        initialValue: value,
        disabled: fieldsShouldBeDisabled
      };
    })
  }));

  // 5. Rakit konfigurasi final secara immutable
  const finalConfig = [
    ...(showReviewSection ? [reviewSection] : []),
    ...processedConfig,
    ...(isEditMode ? [visibilityField] : [])
  ];

  // 6. Kembalikan paket View Model lengkap
  return {
    config: finalConfig,
    formTitle: formTitle,
    showSubmitButton: showSubmitButton,
    showCloseButton: isViewMode
  };
}

