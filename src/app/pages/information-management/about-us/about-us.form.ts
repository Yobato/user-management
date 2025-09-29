import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/about-us.service";
import { FormFactoryOptions, FormViewModel } from "../../base-form-singleton.page";

export function getAboutUsFormConfig(options: FormFactoryOptions<DataItem>): FormViewModel {
  const { mode, data } = options;

  const isEditMode = mode === 'edit';
  const isReviewMode = mode === 'tinjau';
  const isViewMode = mode === 'view';

  const formTitle = isEditMode ? 'Ubah About Us' :
                    isReviewMode ? 'Tinjau About Us' : 'Lihat About Us';

  const showSubmitButton = isEditMode || isReviewMode;

  const baseConfig: FormRow[] = [
    { fields: [{ name: 'label_name', label: 'Nama Label', type: 'text' }] },
    { fields: [{ name: 'image_logo', label: 'Logo Perusahaan', type: 'file', note: 'Ukuran maks. 500KB' }] },
    { fields: [{ name: 'deskripsi', label: 'Deskripsi', type: 'textarea', rows: 5 }] },
    { fields: [{ name: 'visi', label: 'Visi', type: 'textarea', rows: 4 }, { name: 'misi', label: 'Misi', type: 'textarea', rows: 4 }] },
    { fields: [{ name: 'image_structure', label: 'Gambar Struktur Organisasi', type: 'file' }] }
  ];

  let finalConfig = baseConfig;

  if (data) {
    const status = data.status_approval;
    const isRejected = status === 'Rejected';

    const fieldsShouldBeDisabled = isViewMode;
    const showReviewSection = isReviewMode || (isViewMode && isRejected);
    const visibilityToggleShouldBeDisabled = isReviewMode;

    const visibilityField: FormRow = {
      fields: [
        { name: 'visibility', label: 'Visibilitas', type: 'toggle', disabled: visibilityToggleShouldBeDisabled }
      ]
    };

    const reviewSection: FormRow = {
      fields: [{
        type: 'display', name: 'reviewResultSection', renderType: 'status-section', label: '',
        data: {
          title: 'Hasil Review', statusLabel: 'Status', statusValue: status,
          reasonLabel: 'Catatan Review', reasonValue: data.reason
        }
      }]
    };

    const processedConfig = baseConfig.map(row => ({
      ...row,
      fields: row.fields.map(field => ({
        ...field,
        initialValue: data[field.name as keyof DataItem],
        disabled: fieldsShouldBeDisabled
      }))
    }));

    finalConfig = [
      ...(showReviewSection ? [reviewSection] : []),
      ...processedConfig,
      ...(isEditMode || isReviewMode ? [visibilityField] : [])
    ];
  }

  return {
    config: finalConfig,
    formTitle: formTitle,
    showSubmitButton: showSubmitButton,
    showCloseButton: isViewMode
  };
}
