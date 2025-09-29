import { FormRow } from "../../../components/forms/field.config";
import { DataItem } from "../../../services/about-us.service";
import { calculateFormState, createReviewSection, generateFormTitle, populateInitialValues } from "../../../utils/form.helpers";
import { FormFactoryOptions, FormViewModel } from "../../base-form-singleton.page";

export function getAboutUsFormConfig(options: FormFactoryOptions<DataItem>): FormViewModel {
  const { mode, data } = options;

  const state = calculateFormState(mode, data?.status_approval);

  const baseConfig: FormRow[] = [
    { fields: [
      {
        name: 'label_name',
        label: 'Nama Label',
        type: 'text',
        validations: [
            { name: 'required', message: 'Label nama wajib diisi.' },
            { name: 'minLength', value: 3, message: 'Label nama harus lebih dari 2 karakter.' }
          ],
      }]
    },
    { fields: [
      {
        name: 'image_logo',
        label: 'Logo Perusahaan',
        type: 'file',
        note: 'Ukuran maks. 500KB',
        validations: [
              { name: 'required', message: 'Logo wajib diisi.' },
        ]
      }]
    },
    { fields: [
      {
        name: 'deskripsi',
        label: 'Deskripsi',
        type: 'textarea',
        rows: 5,
        validations: [
              { name: 'required', message: 'Deskripsi wajib diisi.' },
        ]
      }]
    },
    { fields:
      [
        {
          name: 'visi',
          label: 'Visi',
          type: 'textarea',
          rows: 4,
          validations: [
              { name: 'required', message: 'Visi wajib diisi.' },
          ]
        },
        {
          name: 'misi',
          label: 'Misi',
          type: 'textarea',
          rows: 4,
          validations: [
              { name: 'required', message: 'Misi wajib diisi.' },
          ]
        }]
    },
    {
      fields: [
        {
          name: 'image_structure',
          label: 'Gambar Struktur Organisasi',
          type: 'file',
          validations: [
              { name: 'required', message: 'Gambar wajib diisi.' },
        ]
        }]
    }
  ];

  const visibilityField: FormRow = {
    fields: [
      { name: 'visibility', label: 'Visibilitas', initialValue:data?.visibility, type: 'toggle', note:"Tampilkan di halaman About Us" }
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



  return {
    config: finalConfig,
    formTitle: generateFormTitle(mode, 'About Us'),
    showSubmitButton: state.showSubmitButton,
    showCloseButton: state.showCloseButton
  };
}
