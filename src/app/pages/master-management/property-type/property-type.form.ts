import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/property-type.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form.page";

export function getPropertyTypeForm(options: FormFactoryOptions<DataItem>): FormViewModel{
  const {mode, data} = options;

  const state = calculateFormState(mode, data?.status_approval);

  let propertyTypeConfig: FormRow[] = [
    {
      fields: [
        {
          type: 'text',
          name: 'nama_property_type',
          label: 'Nama Property Type',
          placeholder: 'Masukkan nama property type',
          validations: [
            { name: 'required', message: 'Nama Property Type wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Nama Property Type harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
    {
      fields: [
        {
          type: 'textarea',
          name: 'deskripsi_property_type',
          label: 'Deskripsi Property Type',
          placeholder: 'Masukkan deskripsi property type',
          rows: 4,
          validations: [
            { name: 'required', message: 'Deskripsi Property Type wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Deskripsi Property Type harus lebih dari 2 karakter.' }
          ],
        },
      ]
    },
  ];

  const visibilityField: FormRow = {
    fields: [
      {
        type: 'toggle',
        name: 'visibility',
        label: 'Visibilitas',
        initialValue:data?.is_visible,
        note: 'Tampilkan item ini di dalam list Property Type'
      },
    ]
  }

  let finalConfig = propertyTypeConfig;
    if(data){
      const processedConfig = populateInitialValues(propertyTypeConfig, data, state.fieldShouldBeDisabled);

      finalConfig = [
        ...(state.showReviewSection ? [createReviewSection(data)]: []),
        ...processedConfig,
        ...(state.isEditMode ? [visibilityField] : [])
      ]
    }

    return{
      config: finalConfig,
      formTitle: generateFormTitle(mode, 'Property Type'),
      showSubmitButton: state.showSubmitButton,
      showCloseButton: state.showCloseButton,
    }
}
