import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/terms-condition.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form-singleton.page";


export function getTermsConditionFormConfig(options: FormFactoryOptions<DataItem>): FormViewModel {
  const { mode, data } = options;

    const state = calculateFormState(mode, data?.status_approval);

  const baseConfig: FormRow[] = [
    { fields: [{ name: 'label_name', label: 'Nama Label', type: 'text', validations: [{ name: 'required', message: 'Nama Label wajib diisi.' }] }] },
    { fields: [{ name: 'deskripsi', label: 'Deskripsi', type: 'textarea', rows: 5, validations: [{ name: 'required', message: 'Deskripsi wajib diisi.'}]}]},
  ]

  const visibilityField: FormRow = {
      fields: [
        { name: 'is_visible', label: 'Visibilitas', initialValue:data?.is_visible, type: 'toggle', note:"Tampilkan di halaman Terms and Condition" }
      ]
    };

  let finalConfig = baseConfig;
  if (data) {
    const processedConfig = populateInitialValues(baseConfig, data, state.fieldShouldBeDisabled);

    finalConfig = [
      ...(state.showReviewSection ? [createReviewSection(data)] : []),
      ...processedConfig,
      ...(state.isEditMode ? [visibilityField] : [])
    ];
  }



  return{
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'Terms and Condition'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton
  }
}
