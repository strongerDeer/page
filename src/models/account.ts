export interface Term {
  id: string;
  title: string;
  link: string | null;
  mandatory: boolean;
}

export type AccountForm = TextFieldForm | SelectFieldForm;

interface BaseForm {
  id: string;
  label: string;
  required: boolean;
  helpMessage?: string;
}

interface TextFieldForm extends BaseForm {
  type: 'TEXT_FIELD';
}
interface SelectFieldForm extends BaseForm {
  type: 'SELECT';
  option: Array<{ label: string; value: string }>;
}
