import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/pdp-consent.service";

import { FormFactoryOptions, FormViewModel } from '../../base-form.page';


export function getPdpConsentForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;
  const status = data?.status_approval;

  const isViewMode = mode === 'view';
  const isReviewMode = mode === 'tinjau';
  const isEditMode = mode === 'edit';
  const isCreateOrEdit = mode === 'create' || mode === 'edit';

  const fieldShouldBeDisabled = isViewMode;
  const showReviewSection = isReviewMode || (isViewMode && (status === 'Rejected' || status === 'Sendback'));
  const showSubmitButton = isCreateOrEdit || isReviewMode;

  const formTitle = mode === 'create' ? 'Buat PDP Consent Baru' :
                    mode === 'edit' ? 'Ubah PDP Consent' :
                    mode === 'tinjau' ? 'Tinjau PDP Consent' : 'Lihat PDP Consent';

  const pdpConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'textarea',
          name: 'detail',
          label: 'Detail PDP Consent',
          rows: 5,
          placeholder: "Masukkan detail PDP Consent",
          validations: [
              { name: 'required', message: 'Detail PDP Consent wajib diisi.' },
          ]
        }
      ]
    },
    {
      fields: [
        {
          type: 'toggle',
          name: 'isVisible',
          label: 'Wajib dipilih',
          note: 'Pengguna harus setuju dengan PDP ini sebelum melanjutkan.'
        },
      ]
    },
  ];

  let finalConfig = pdpConfig;
  if(data){
    finalConfig = finalConfig.map(row => ({
      ...row,
      fields: row.fields.map(field =>{
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
        name: 'is_visible',
        label: 'Visibilitas',
        note: 'Tampilkan item ini di dalam list PDP'
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
          reasonValue: data.reason
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
