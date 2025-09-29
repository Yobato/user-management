import { FormRow } from "../components/forms/field.config";
import { FormMode } from "../pages/base-form.page";

type DataWithStatus = { status_approval?: string; reason?: string; };

// Cek sedang di mode apa untuk disabled dan buttonnya
export function calculateFormState(mode: FormMode, status?: string){
  const isViewMode = mode === 'view';
  const isReviewMode = mode === 'tinjau';
  const isCreateOrEdit = mode === 'create' || mode === 'edit';

  return{
    isViewMode,
    isReviewMode,
    isEditMode: mode === 'edit',
    fieldShouldBeDisabled: isViewMode,
    allowFileClear: !isViewMode,
    showReviewSection: isReviewMode || (isViewMode && (status === 'Rejected' || status === 'Sendback')),
    showSubmitButton: isCreateOrEdit || isReviewMode,
    showCloseButton: isViewMode,
  };
}

export function generateFormTitle(mode: FormMode, entityName: string): string {
  switch(mode){
    case 'create': return  `Buat ${entityName}`;
    case 'edit': return  `Ubah ${entityName}`;
    case 'tinjau': return `Tinjau ${entityName}`;
    case 'view': return `Lihat ${entityName}`;
    default: return entityName;
  }
}

export function populateInitialValues<T>(
  config: FormRow[],
  data: T,
  disabled: boolean,
): FormRow[]{
  return config.map(row =>({
    ...row,
    fields: row.fields.map(field => ({
      ...field,
      initialValue: data[field.name as keyof T],
      disabled
    })),
  }));
}

export function createReviewSection(data: DataWithStatus): FormRow {
  return {
    fields: [{
      type: 'display',
      name: 'reviewResultSection',
      renderType: 'status-section',
      label: '', // label tidak diperlukan untuk tipe display
      data: {
        title: 'Hasil Review',
        statusLabel: 'Status',
        statusValue: data.status_approval,
        reasonLabel: 'Catatan Review',
        reasonValue: data.reason
      }
    }]
  };
}


