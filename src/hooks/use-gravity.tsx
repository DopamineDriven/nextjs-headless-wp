import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from "react";
import {
  AddressFieldInput,
  PasswordInputProperty,
  EmailFieldInput,
  NameFieldInput,
  CheckboxFieldInput,
  ImageInput,

  InputMaybe,
  Scalars,
  ListFieldInput
} from "@/graphql/generated/graphql";

export enum FormIdCounter {
  signUp = 1,
  login = 2
}

export type PasswordFieldInput = {
  confirmationValue?: InputMaybe<string> | undefined;
  value?: InputMaybe<string> | undefined;
}

export type Enumerable<T> = T | Array<T>;

export interface BaseFieldValue {
  id: Scalars["Int"];
}

export interface AddressFieldValue extends BaseFieldValue {
  addressValues: InputMaybe<AddressFieldInput>;
}

export interface CheckboxFieldValues extends BaseFieldValue {
  checkboxValues: InputMaybe<Array<InputMaybe<CheckboxFieldInput>>>;
}

export interface EmailFieldValues extends BaseFieldValue {
  emailValues: EmailFieldInput;
}

export interface FileUploadFieldValues extends BaseFieldValue {
  fileUploadValues: InputMaybe<Array<InputMaybe<Scalars["Upload"]>>>;
}

export interface ListFieldValues extends BaseFieldValue {
  listFieldValues: InputMaybe<Array<InputMaybe<ListFieldInput>>>;
}

export interface NameFieldValues extends BaseFieldValue {
  nameValues: NameFieldInput;
}

export interface PasswordFieldValues extends BaseFieldValue {
  passwordValues: PasswordFieldInput
}

export interface PostImageFieldValue extends BaseFieldValue {
  postImageValues: InputMaybe<ImageInput>;
}

export interface StringFieldValue extends BaseFieldValue {
  value: InputMaybe<Scalars["String"]>;
}

// used by Multiselect, Post Category, Post Custom, & Post Tags fields
export interface StringFieldValues extends BaseFieldValue {
  values: Array<Scalars['String']>;
}

export type FieldValueUnion =
  | AddressFieldValue
  | CheckboxFieldValues
  | EmailFieldValues
  | FileUploadFieldValues
  | NameFieldValues
  | PasswordFieldValues
  | PostImageFieldValue
  | StringFieldValue
  | StringFieldValues;

export interface Action {
  type: keyof typeof ACTION_TYPES;
  fieldValue: FieldValueUnion;
}
export enum ACTION_TYPES {
  updateAddressFieldValue = "updateAddressFieldValue",
  updateCheckboxFieldValue = "updateCheckboxFieldValue",
  updateDateFieldValue = "updateDateFieldValue",
  updateEmailFieldValue = "updateEmailFieldValue",
  updateFileFieldValue = "updateFileFieldValue",
  updateLikertFieldValue = "updateLikertFieldValue",
  updateMultiSelectFieldValue = "updateMultiSelectFieldValue",
  updateNameFieldValue = "updateNameFieldValue",
  updatePasswordFieldValue = "updatePasswordFieldValue",
  updatePhoneFieldValue = "updatePhoneFieldValue",
  updatePostImageFieldValue = "updatePostImageFieldValue",
  updateRadioFieldValue = "updateRadioFieldValue",
  updateSelectFieldValue = "updateSelectFieldValue",
  updateTextAreaFieldValue = "updateTextAreaFieldValue",
  updateTextFieldValue = "updateTextFieldValue",
  updateTimeFieldValue = "updateTimeFieldValue",
  updateWebsiteFieldValue = "updateWebsiteFieldValue"
}

export function reducer(state: FieldValueUnion[], action: Action) {
  const getOtherFieldValues = (id: number) =>
    state.filter(fieldValue => fieldValue.id !== id);

  switch (action.type) {
    case ACTION_TYPES.updateAddressFieldValue: {
      const { id, addressValues } = action.fieldValue as AddressFieldValue;
      return [...getOtherFieldValues(id), { id, addressValues }];
    }
    case ACTION_TYPES.updateCheckboxFieldValue: {
      const { id, checkboxValues } = action.fieldValue as CheckboxFieldValues;
      return [...getOtherFieldValues(id), { id, checkboxValues }];
    }
    case ACTION_TYPES.updateEmailFieldValue: {
      const { id, emailValues } = action.fieldValue as EmailFieldValues;
      return [...getOtherFieldValues(id), { id, emailValues }];
    }
    case ACTION_TYPES.updateFileFieldValue: {
      const { id, fileUploadValues } =
        action.fieldValue as FileUploadFieldValues;
      return [...getOtherFieldValues(id), { id, fileUploadValues }];
    }
    case ACTION_TYPES.updatePasswordFieldValue: {
      const { id, passwordValues } = action.fieldValue as PasswordFieldValues;
      return [...getOtherFieldValues(id), { id, passwordValues }];
    }

    case ACTION_TYPES.updateNameFieldValue: {
      const { id, nameValues } = action.fieldValue as NameFieldValues;
      return [...getOtherFieldValues(id), { id, nameValues }];
    }
    case ACTION_TYPES.updatePostImageFieldValue: {
      const { id, postImageValues } = action.fieldValue as PostImageFieldValue;
      return [...getOtherFieldValues(id), { id, postImageValues }];
    }
    case ACTION_TYPES.updateDateFieldValue:
    case ACTION_TYPES.updateLikertFieldValue:
    case ACTION_TYPES.updatePasswordFieldValue:
    case ACTION_TYPES.updatePhoneFieldValue:
    case ACTION_TYPES.updateRadioFieldValue:
    case ACTION_TYPES.updateSelectFieldValue:
    case ACTION_TYPES.updateTextAreaFieldValue:
    case ACTION_TYPES.updateTextFieldValue:
    case ACTION_TYPES.updateTimeFieldValue:
    case ACTION_TYPES.updateWebsiteFieldValue: {
      const { id, value } = action.fieldValue as StringFieldValue;
      return [...getOtherFieldValues(id), { id, value }];
    }
    default:
      throw new Error(
        `Field value update operation not supported: ${action.type}.`
      );
  }
}
export const DEFAULT_STATE: FieldValueUnion[] = [];

export const GravityFormContext = createContext<{
  state: FieldValueUnion[];
  dispatch: Dispatch<Action>;
}>({
  state: DEFAULT_STATE,
  dispatch: () => null
});

export function GravityFormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  return (
    <GravityFormContext.Provider value={{ state, dispatch }}>
      {children}
    </GravityFormContext.Provider>
  );
}

const useGravityForm = () => useContext(GravityFormContext);

export default useGravityForm;
