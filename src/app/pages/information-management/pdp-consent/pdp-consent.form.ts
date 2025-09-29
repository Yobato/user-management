import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/pdp-consent.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";

import { FormFactoryOptions, FormViewModel } from '../../base-form.page';


export function getPdpConsentForm(options: FormFactoryOptions<DataItem>): FormViewModel{

  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);


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

  let finalConfig = pdpConfig;
    if(data){
      const processedConfig = populateInitialValues(pdpConfig, data, state.fieldShouldBeDisabled);

      finalConfig = [
        ...(state.showReviewSection ? [createReviewSection(data)]: []),
        ...processedConfig,
        ...(state.isEditMode ? [visibilityField] :[])
      ]
    }

  return{
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'PDP Consent'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton,
  };

}
