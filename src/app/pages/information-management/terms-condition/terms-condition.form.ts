import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/terms-condition.service";
import { FormFactoryOptions, FormViewModel } from "../../base-form-singleton.page";


export function getTermsConditionFormConfig(options: FormFactoryOptions<DataItem>): FormViewModel {
  const { mode, data } = options;
  const isEditMode = mode === 'edit';
  const isReviewMode = mode === 'tinjau';
  const isViewMode = mode === 'view';

  const formTitle = isEditMode ? 'Ubah Terms and Condition' :
                    isReviewMode ? 'Tinjau Terms and Condition' : 'Lihat Terms and Condition';

  const showSubmitButton = isEditMode || isReviewMode;

  const baseConfig: FormRow[] = [
    { fields: [{ name: 'label_name', label: 'Nama Label', type: 'text' }] },
    { fields: [{ name: 'deskripsi', label: 'Deskripsi', type: 'textarea', rows: 5}]},
  ]

  let finalConfig = baseConfig;

  if(data){
    const status = data.status_approval;
    const isRejected = status === 'Rejected';

    const fieldsShouldBeDisabled = isViewMode;
    const showReviewSection = isReviewMode || (isViewMode && isRejected);
    const visibilityToggleShouldBeDisabled = isReviewMode;

    const visibilityField: FormRow = {
      fields: [
        { name: 'is_visible', label: 'Visibilitas', type: 'toggle', initialValue: data.is_visible, disabled: visibilityToggleShouldBeDisabled }
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
      ...(isEditMode ? [visibilityField] : [])
    ];
  };

  return{
    config: finalConfig,
    formTitle: formTitle,
    showSubmitButton: showSubmitButton,
    showCloseButton: isViewMode
  }
}
