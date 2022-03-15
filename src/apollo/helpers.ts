import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy
} from "@apollo/client/cache";
export type AddressFieldKeySpecifier = (
  | "addressType"
  | "addressValues"
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "copyValuesOptionFieldId"
  | "copyValuesOptionLabel"
  | "cssClass"
  | "defaultCountry"
  | "defaultProvince"
  | "defaultState"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldCopyValuesOption"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | AddressFieldKeySpecifier
)[];
export type AddressFieldFieldPolicy = {
  addressType?: FieldPolicy<any> | FieldReadFunction<any>;
  addressValues?: FieldPolicy<any> | FieldReadFunction<any>;
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  copyValuesOptionFieldId?: FieldPolicy<any> | FieldReadFunction<any>;
  copyValuesOptionLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultCountry?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultProvince?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultState?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldCopyValuesOption?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddressFieldValueKeySpecifier = (
  | "city"
  | "country"
  | "lineTwo"
  | "state"
  | "street"
  | "zip"
  | AddressFieldValueKeySpecifier
)[];
export type AddressFieldValueFieldPolicy = {
  city?: FieldPolicy<any> | FieldReadFunction<any>;
  country?: FieldPolicy<any> | FieldReadFunction<any>;
  lineTwo?: FieldPolicy<any> | FieldReadFunction<any>;
  state?: FieldPolicy<any> | FieldReadFunction<any>;
  street?: FieldPolicy<any> | FieldReadFunction<any>;
  zip?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AddressInputPropertyKeySpecifier = (
  | "autocompleteAttribute"
  | "customLabel"
  | "defaultValue"
  | "id"
  | "isHidden"
  | "key"
  | "label"
  | "name"
  | "placeholder"
  | AddressInputPropertyKeySpecifier
)[];
export type AddressInputPropertyFieldPolicy = {
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type AvatarKeySpecifier = (
  | "default"
  | "extraAttr"
  | "forceDefault"
  | "foundAvatar"
  | "height"
  | "isRestricted"
  | "rating"
  | "scheme"
  | "size"
  | "url"
  | "width"
  | AvatarKeySpecifier
)[];
export type AvatarFieldPolicy = {
  default?: FieldPolicy<any> | FieldReadFunction<any>;
  extraAttr?: FieldPolicy<any> | FieldReadFunction<any>;
  forceDefault?: FieldPolicy<any> | FieldReadFunction<any>;
  foundAvatar?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  rating?: FieldPolicy<any> | FieldReadFunction<any>;
  scheme?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CaptchaFieldKeySpecifier = (
  | "captchaBadgePosition"
  | "captchaLanguage"
  | "captchaTheme"
  | "captchaType"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputType"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "simpleCaptchaBackgroundColor"
  | "simpleCaptchaFontColor"
  | "simpleCaptchaSize"
  | "type"
  | "value"
  | "visibility"
  | CaptchaFieldKeySpecifier
)[];
export type CaptchaFieldFieldPolicy = {
  captchaBadgePosition?: FieldPolicy<any> | FieldReadFunction<any>;
  captchaLanguage?: FieldPolicy<any> | FieldReadFunction<any>;
  captchaTheme?: FieldPolicy<any> | FieldReadFunction<any>;
  captchaType?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  simpleCaptchaBackgroundColor?: FieldPolicy<any> | FieldReadFunction<any>;
  simpleCaptchaFontColor?: FieldPolicy<any> | FieldReadFunction<any>;
  simpleCaptchaSize?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryKeySpecifier = (
  | "ancestors"
  | "categoryId"
  | "children"
  | "contentNodes"
  | "count"
  | "databaseId"
  | "description"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "id"
  | "isContentNode"
  | "isRestricted"
  | "isTermNode"
  | "link"
  | "name"
  | "parent"
  | "parentDatabaseId"
  | "parentId"
  | "posts"
  | "seo"
  | "slug"
  | "taxonomy"
  | "taxonomyName"
  | "termGroupId"
  | "termTaxonomyId"
  | "uri"
  | CategoryKeySpecifier
)[];
export type CategoryFieldPolicy = {
  ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
  categoryId?: FieldPolicy<any> | FieldReadFunction<any>;
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>;
  termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
  termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAncestorsCategoryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CategoryToAncestorsCategoryConnectionKeySpecifier
)[];
export type CategoryToAncestorsCategoryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToAncestorsCategoryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToAncestorsCategoryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToCategoryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CategoryToCategoryConnectionKeySpecifier
)[];
export type CategoryToCategoryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToCategoryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CategoryToCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToCategoryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToContentNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CategoryToContentNodeConnectionKeySpecifier
)[];
export type CategoryToContentNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToContentNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CategoryToContentNodeConnectionEdgeKeySpecifier
)[];
export type CategoryToContentNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToParentCategoryConnectionEdgeKeySpecifier = (
  | "node"
  | CategoryToParentCategoryConnectionEdgeKeySpecifier
)[];
export type CategoryToParentCategoryConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPostConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CategoryToPostConnectionKeySpecifier
)[];
export type CategoryToPostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToPostConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CategoryToPostConnectionEdgeKeySpecifier
)[];
export type CategoryToPostConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CategoryToTaxonomyConnectionEdgeKeySpecifier = (
  | "node"
  | CategoryToTaxonomyConnectionEdgeKeySpecifier
)[];
export type CategoryToTaxonomyConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckboxFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "checkboxValues"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | CheckboxFieldKeySpecifier
)[];
export type CheckboxFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxValues?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckboxFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | CheckboxFieldChoiceKeySpecifier
)[];
export type CheckboxFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckboxFieldValueKeySpecifier = (
  | "inputId"
  | "text"
  | "value"
  | CheckboxFieldValueKeySpecifier
)[];
export type CheckboxFieldValueFieldPolicy = {
  inputId?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CheckboxInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | CheckboxInputPropertyKeySpecifier
)[];
export type CheckboxInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentKeySpecifier = (
  | "agent"
  | "approved"
  | "author"
  | "authorIp"
  | "commentId"
  | "commentedOn"
  | "content"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "id"
  | "isRestricted"
  | "karma"
  | "parent"
  | "parentDatabaseId"
  | "parentId"
  | "replies"
  | "type"
  | CommentKeySpecifier
)[];
export type CommentFieldPolicy = {
  agent?: FieldPolicy<any> | FieldReadFunction<any>;
  approved?: FieldPolicy<any> | FieldReadFunction<any>;
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorIp?: FieldPolicy<any> | FieldReadFunction<any>;
  commentId?: FieldPolicy<any> | FieldReadFunction<any>;
  commentedOn?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  karma?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  replies?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentAuthorKeySpecifier = (
  | "avatar"
  | "databaseId"
  | "email"
  | "id"
  | "isRestricted"
  | "name"
  | "url"
  | CommentAuthorKeySpecifier
)[];
export type CommentAuthorFieldPolicy = {
  avatar?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | CommentToCommentConnectionKeySpecifier
)[];
export type CommentToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | CommentToCommentConnectionEdgeKeySpecifier
)[];
export type CommentToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToCommenterConnectionEdgeKeySpecifier = (
  | "node"
  | CommentToCommenterConnectionEdgeKeySpecifier
)[];
export type CommentToCommenterConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToContentNodeConnectionEdgeKeySpecifier = (
  | "node"
  | CommentToContentNodeConnectionEdgeKeySpecifier
)[];
export type CommentToContentNodeConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommentToParentCommentConnectionEdgeKeySpecifier = (
  | "node"
  | CommentToParentCommentConnectionEdgeKeySpecifier
)[];
export type CommentToParentCommentConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CommenterKeySpecifier = (
  | "avatar"
  | "databaseId"
  | "email"
  | "id"
  | "isRestricted"
  | "name"
  | "url"
  | CommenterKeySpecifier
)[];
export type CommenterFieldPolicy = {
  avatar?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConditionalLogicKeySpecifier = (
  | "actionType"
  | "logicType"
  | "rules"
  | ConditionalLogicKeySpecifier
)[];
export type ConditionalLogicFieldPolicy = {
  actionType?: FieldPolicy<any> | FieldReadFunction<any>;
  logicType?: FieldPolicy<any> | FieldReadFunction<any>;
  rules?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConditionalLogicRuleKeySpecifier = (
  | "fieldId"
  | "operator"
  | "value"
  | ConditionalLogicRuleKeySpecifier
)[];
export type ConditionalLogicRuleFieldPolicy = {
  fieldId?: FieldPolicy<any> | FieldReadFunction<any>;
  operator?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ConsentFieldKeySpecifier = (
  | "adminLabel"
  | "checkboxLabel"
  | "conditionalLogic"
  | "consentValue"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | ConsentFieldKeySpecifier
)[];
export type ConsentFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  consentValue?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeKeySpecifier = (
  | "contentType"
  | "contentTypeName"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "desiredSlug"
  | "editingLockedBy"
  | "enclosure"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "guid"
  | "id"
  | "isContentNode"
  | "isPreview"
  | "isRestricted"
  | "isTermNode"
  | "lastEditedBy"
  | "link"
  | "modified"
  | "modifiedGmt"
  | "previewRevisionDatabaseId"
  | "previewRevisionId"
  | "slug"
  | "status"
  | "template"
  | "uri"
  | ContentNodeKeySpecifier
)[];
export type ContentNodeFieldPolicy = {
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  guid?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  template?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToContentTypeConnectionEdgeKeySpecifier = (
  | "node"
  | ContentNodeToContentTypeConnectionEdgeKeySpecifier
)[];
export type ContentNodeToContentTypeConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEditLastConnectionEdgeKeySpecifier = (
  | "node"
  | ContentNodeToEditLastConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEditLastConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEditLockConnectionEdgeKeySpecifier = (
  | "lockTimestamp"
  | "node"
  | ContentNodeToEditLockConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEditLockConnectionEdgeFieldPolicy = {
  lockTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedScriptConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | ContentNodeToEnqueuedScriptConnectionKeySpecifier
)[];
export type ContentNodeToEnqueuedScriptConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedStylesheetConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type ContentNodeToEnqueuedStylesheetConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTemplateKeySpecifier = (
  | "templateName"
  | ContentTemplateKeySpecifier
)[];
export type ContentTemplateFieldPolicy = {
  templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeKeySpecifier = (
  | "canExport"
  | "connectedTaxonomies"
  | "contentNodes"
  | "deleteWithUser"
  | "description"
  | "excludeFromSearch"
  | "graphqlPluralName"
  | "graphqlSingleName"
  | "hasArchive"
  | "hierarchical"
  | "id"
  | "isContentNode"
  | "isFrontPage"
  | "isPostsPage"
  | "isRestricted"
  | "isTermNode"
  | "label"
  | "labels"
  | "menuIcon"
  | "menuPosition"
  | "name"
  | "public"
  | "publiclyQueryable"
  | "restBase"
  | "restControllerClass"
  | "showInAdminBar"
  | "showInGraphql"
  | "showInMenu"
  | "showInNavMenus"
  | "showInRest"
  | "showUi"
  | "uri"
  | ContentTypeKeySpecifier
)[];
export type ContentTypeFieldPolicy = {
  canExport?: FieldPolicy<any> | FieldReadFunction<any>;
  connectedTaxonomies?: FieldPolicy<any> | FieldReadFunction<any>;
  contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteWithUser?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  excludeFromSearch?: FieldPolicy<any> | FieldReadFunction<any>;
  graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>;
  graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>;
  hasArchive?: FieldPolicy<any> | FieldReadFunction<any>;
  hierarchical?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>;
  isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labels?: FieldPolicy<any> | FieldReadFunction<any>;
  menuIcon?: FieldPolicy<any> | FieldReadFunction<any>;
  menuPosition?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  public?: FieldPolicy<any> | FieldReadFunction<any>;
  publiclyQueryable?: FieldPolicy<any> | FieldReadFunction<any>;
  restBase?: FieldPolicy<any> | FieldReadFunction<any>;
  restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>;
  showInAdminBar?: FieldPolicy<any> | FieldReadFunction<any>;
  showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>;
  showInMenu?: FieldPolicy<any> | FieldReadFunction<any>;
  showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>;
  showInRest?: FieldPolicy<any> | FieldReadFunction<any>;
  showUi?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToContentNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | ContentTypeToContentNodeConnectionKeySpecifier
)[];
export type ContentTypeToContentNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToContentNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | ContentTypeToContentNodeConnectionEdgeKeySpecifier
)[];
export type ContentTypeToContentNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToTaxonomyConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | ContentTypeToTaxonomyConnectionKeySpecifier
)[];
export type ContentTypeToTaxonomyConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ContentTypeToTaxonomyConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | ContentTypeToTaxonomyConnectionEdgeKeySpecifier
)[];
export type ContentTypeToTaxonomyConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCategoryPayloadKeySpecifier = (
  | "category"
  | "clientMutationId"
  | CreateCategoryPayloadKeySpecifier
)[];
export type CreateCategoryPayloadFieldPolicy = {
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateCommentPayloadKeySpecifier = (
  | "clientMutationId"
  | "comment"
  | "success"
  | CreateCommentPayloadKeySpecifier
)[];
export type CreateCommentPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateMediaItemPayloadKeySpecifier = (
  | "clientMutationId"
  | "mediaItem"
  | CreateMediaItemPayloadKeySpecifier
)[];
export type CreateMediaItemPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePagePayloadKeySpecifier = (
  | "clientMutationId"
  | "page"
  | CreatePagePayloadKeySpecifier
)[];
export type CreatePagePayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePostFormatPayloadKeySpecifier = (
  | "clientMutationId"
  | "postFormat"
  | CreatePostFormatPayloadKeySpecifier
)[];
export type CreatePostFormatPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreatePostPayloadKeySpecifier = (
  | "clientMutationId"
  | "post"
  | CreatePostPayloadKeySpecifier
)[];
export type CreatePostPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateTagPayloadKeySpecifier = (
  | "clientMutationId"
  | "tag"
  | CreateTagPayloadKeySpecifier
)[];
export type CreateTagPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateUserPayloadKeySpecifier = (
  | "clientMutationId"
  | "user"
  | CreateUserPayloadKeySpecifier
)[];
export type CreateUserPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DatabaseIdentifierKeySpecifier = (
  | "databaseId"
  | DatabaseIdentifierKeySpecifier
)[];
export type DatabaseIdentifierFieldPolicy = {
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DateFieldKeySpecifier = (
  | "adminLabel"
  | "calendarIconType"
  | "calendarIconUrl"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "dateFormat"
  | "dateType"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | DateFieldKeySpecifier
)[];
export type DateFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  calendarIconType?: FieldPolicy<any> | FieldReadFunction<any>;
  calendarIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  dateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  dateType?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DateInputPropertyKeySpecifier = (
  | "autocompleteAttribute"
  | "customLabel"
  | "defaultValue"
  | "id"
  | "label"
  | "placeholder"
  | DateInputPropertyKeySpecifier
)[];
export type DateInputPropertyFieldPolicy = {
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DefaultTemplateKeySpecifier = (
  | "templateName"
  | DefaultTemplateKeySpecifier
)[];
export type DefaultTemplateFieldPolicy = {
  templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCategoryPayloadKeySpecifier = (
  | "category"
  | "clientMutationId"
  | "deletedId"
  | DeleteCategoryPayloadKeySpecifier
)[];
export type DeleteCategoryPayloadFieldPolicy = {
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteCommentPayloadKeySpecifier = (
  | "clientMutationId"
  | "comment"
  | "deletedId"
  | DeleteCommentPayloadKeySpecifier
)[];
export type DeleteCommentPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteGfDraftEntryPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "draftEntry"
  | DeleteGfDraftEntryPayloadKeySpecifier
)[];
export type DeleteGfDraftEntryPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  draftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteGfEntryPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "entry"
  | DeleteGfEntryPayloadKeySpecifier
)[];
export type DeleteGfEntryPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  entry?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteMediaItemPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "mediaItem"
  | DeleteMediaItemPayloadKeySpecifier
)[];
export type DeleteMediaItemPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePagePayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "page"
  | DeletePagePayloadKeySpecifier
)[];
export type DeletePagePayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePostFormatPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "postFormat"
  | DeletePostFormatPayloadKeySpecifier
)[];
export type DeletePostFormatPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeletePostPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "post"
  | DeletePostPayloadKeySpecifier
)[];
export type DeletePostPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteTagPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "tag"
  | DeleteTagPayloadKeySpecifier
)[];
export type DeleteTagPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteUserPayloadKeySpecifier = (
  | "clientMutationId"
  | "deletedId"
  | "user"
  | DeleteUserPayloadKeySpecifier
)[];
export type DeleteUserPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  deletedId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DiscussionSettingsKeySpecifier = (
  | "defaultCommentStatus"
  | "defaultPingStatus"
  | DiscussionSettingsKeySpecifier
)[];
export type DiscussionSettingsFieldPolicy = {
  defaultCommentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultPingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EmailFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasEmailConfirmation"
  | "id"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | EmailFieldKeySpecifier
)[];
export type EmailFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEmailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EmailInputPropertyKeySpecifier = (
  | "autocompleteAttribute"
  | "customLabel"
  | "defaultValue"
  | "id"
  | "label"
  | "name"
  | "placeholder"
  | EmailInputPropertyKeySpecifier
)[];
export type EmailInputPropertyFieldPolicy = {
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedAssetKeySpecifier = (
  | "args"
  | "dependencies"
  | "extra"
  | "handle"
  | "id"
  | "src"
  | "version"
  | EnqueuedAssetKeySpecifier
)[];
export type EnqueuedAssetFieldPolicy = {
  args?: FieldPolicy<any> | FieldReadFunction<any>;
  dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
  extra?: FieldPolicy<any> | FieldReadFunction<any>;
  handle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  src?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedScriptKeySpecifier = (
  | "args"
  | "dependencies"
  | "extra"
  | "handle"
  | "id"
  | "src"
  | "version"
  | EnqueuedScriptKeySpecifier
)[];
export type EnqueuedScriptFieldPolicy = {
  args?: FieldPolicy<any> | FieldReadFunction<any>;
  dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
  extra?: FieldPolicy<any> | FieldReadFunction<any>;
  handle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  src?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EnqueuedStylesheetKeySpecifier = (
  | "args"
  | "dependencies"
  | "extra"
  | "handle"
  | "id"
  | "src"
  | "version"
  | EnqueuedStylesheetKeySpecifier
)[];
export type EnqueuedStylesheetFieldPolicy = {
  args?: FieldPolicy<any> | FieldReadFunction<any>;
  dependencies?: FieldPolicy<any> | FieldReadFunction<any>;
  extra?: FieldPolicy<any> | FieldReadFunction<any>;
  handle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  src?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type EntryQuizResultsKeySpecifier = (
  | "grade"
  | "isPassingScore"
  | "percent"
  | "score"
  | EntryQuizResultsKeySpecifier
)[];
export type EntryQuizResultsFieldPolicy = {
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
  isPassingScore?: FieldPolicy<any> | FieldReadFunction<any>;
  percent?: FieldPolicy<any> | FieldReadFunction<any>;
  score?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FieldErrorKeySpecifier = (
  | "id"
  | "message"
  | FieldErrorKeySpecifier
)[];
export type FieldErrorFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FileUploadFieldKeySpecifier = (
  | "adminLabel"
  | "allowedExtensions"
  | "canAcceptMultipleFiles"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxFileSize"
  | "maxFiles"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | FileUploadFieldKeySpecifier
)[];
export type FileUploadFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  allowedExtensions?: FieldPolicy<any> | FieldReadFunction<any>;
  canAcceptMultipleFiles?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxFileSize?: FieldPolicy<any> | FieldReadFunction<any>;
  maxFiles?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormButtonKeySpecifier = (
  | "conditionalLogic"
  | "imageUrl"
  | "text"
  | "type"
  | FormButtonKeySpecifier
)[];
export type FormButtonFieldPolicy = {
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  imageUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormConfirmationKeySpecifier = (
  | "conditionalLogic"
  | "id"
  | "isActive"
  | "isDefault"
  | "message"
  | "name"
  | "pageId"
  | "queryString"
  | "type"
  | "url"
  | FormConfirmationKeySpecifier
)[];
export type FormConfirmationFieldPolicy = {
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  isDefault?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  pageId?: FieldPolicy<any> | FieldReadFunction<any>;
  queryString?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormDataPoliciesKeySpecifier = (
  | "canExportAndErase"
  | "entryData"
  | "identificationFieldDatabaseId"
  | FormDataPoliciesKeySpecifier
)[];
export type FormDataPoliciesFieldPolicy = {
  canExportAndErase?: FieldPolicy<any> | FieldReadFunction<any>;
  entryData?: FieldPolicy<any> | FieldReadFunction<any>;
  identificationFieldDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormEntryDataPolicyKeySpecifier = (
  | "key"
  | "shouldErase"
  | "shouldExport"
  | FormEntryDataPolicyKeySpecifier
)[];
export type FormEntryDataPolicyFieldPolicy = {
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldErase?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldExport?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormEntryLimitsKeySpecifier = (
  | "hasLimit"
  | "limitReachedMessage"
  | "limitationPeriod"
  | "maxEntries"
  | FormEntryLimitsKeySpecifier
)[];
export type FormEntryLimitsFieldPolicy = {
  hasLimit?: FieldPolicy<any> | FieldReadFunction<any>;
  limitReachedMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  limitationPeriod?: FieldPolicy<any> | FieldReadFunction<any>;
  maxEntries?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormFieldKeySpecifier = (
  | "displayOnly"
  | "id"
  | "inputType"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "type"
  | "visibility"
  | FormFieldKeySpecifier
)[];
export type FormFieldFieldPolicy = {
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormFieldDataPolicyKeySpecifier = (
  | "isIdentificationField"
  | "shouldErase"
  | "shouldExport"
  | FormFieldDataPolicyKeySpecifier
)[];
export type FormFieldDataPolicyFieldPolicy = {
  isIdentificationField?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldErase?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldExport?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormLastPageButtonKeySpecifier = (
  | "imageUrl"
  | "text"
  | "type"
  | FormLastPageButtonKeySpecifier
)[];
export type FormLastPageButtonFieldPolicy = {
  imageUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormLoginKeySpecifier = (
  | "isLoginRequired"
  | "loginRequiredMessage"
  | FormLoginKeySpecifier
)[];
export type FormLoginFieldPolicy = {
  isLoginRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  loginRequiredMessage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormNotificationKeySpecifier = (
  | "bcc"
  | "conditionalLogic"
  | "event"
  | "from"
  | "fromName"
  | "id"
  | "isActive"
  | "isAutoformatted"
  | "message"
  | "name"
  | "replyTo"
  | "routing"
  | "service"
  | "shouldSendAttachments"
  | "subject"
  | "to"
  | "toType"
  | FormNotificationKeySpecifier
)[];
export type FormNotificationFieldPolicy = {
  bcc?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  event?: FieldPolicy<any> | FieldReadFunction<any>;
  from?: FieldPolicy<any> | FieldReadFunction<any>;
  fromName?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  isAutoformatted?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  replyTo?: FieldPolicy<any> | FieldReadFunction<any>;
  routing?: FieldPolicy<any> | FieldReadFunction<any>;
  service?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldSendAttachments?: FieldPolicy<any> | FieldReadFunction<any>;
  subject?: FieldPolicy<any> | FieldReadFunction<any>;
  to?: FieldPolicy<any> | FieldReadFunction<any>;
  toType?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormNotificationRoutingKeySpecifier = (
  | "email"
  | "fieldId"
  | "operator"
  | "value"
  | FormNotificationRoutingKeySpecifier
)[];
export type FormNotificationRoutingFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldId?: FieldPolicy<any> | FieldReadFunction<any>;
  operator?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormPaginationKeySpecifier = (
  | "backgroundColor"
  | "color"
  | "hasProgressbarOnConfirmation"
  | "pageNames"
  | "progressbarCompletionText"
  | "style"
  | "type"
  | FormPaginationKeySpecifier
)[];
export type FormPaginationFieldPolicy = {
  backgroundColor?: FieldPolicy<any> | FieldReadFunction<any>;
  color?: FieldPolicy<any> | FieldReadFunction<any>;
  hasProgressbarOnConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNames?: FieldPolicy<any> | FieldReadFunction<any>;
  progressbarCompletionText?: FieldPolicy<any> | FieldReadFunction<any>;
  style?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormPersonalDataKeySpecifier = (
  | "dataPolicies"
  | "daysToRetain"
  | "retentionPolicy"
  | "shouldSaveIP"
  | FormPersonalDataKeySpecifier
)[];
export type FormPersonalDataFieldPolicy = {
  dataPolicies?: FieldPolicy<any> | FieldReadFunction<any>;
  daysToRetain?: FieldPolicy<any> | FieldReadFunction<any>;
  retentionPolicy?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldSaveIP?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormPostCreationKeySpecifier = (
  | "author"
  | "authorDatabaseId"
  | "authorId"
  | "categoryDatabaseId"
  | "contentTemplate"
  | "format"
  | "hasContentTemplate"
  | "hasTitleTemplate"
  | "shouldUseCurrentUserAsAuthor"
  | "status"
  | "titleTemplate"
  | FormPostCreationKeySpecifier
)[];
export type FormPostCreationFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  categoryDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTemplate?: FieldPolicy<any> | FieldReadFunction<any>;
  format?: FieldPolicy<any> | FieldReadFunction<any>;
  hasContentTemplate?: FieldPolicy<any> | FieldReadFunction<any>;
  hasTitleTemplate?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldUseCurrentUserAsAuthor?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  titleTemplate?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormQuizKeySpecifier = (
  | "failConfirmation"
  | "grades"
  | "gradingType"
  | "hasInstantFeedback"
  | "hasLetterConfirmationMessage"
  | "hasPassFailConfirmationMessage"
  | "isShuffleFieldsEnabled"
  | "letterConfirmation"
  | "maxScore"
  | "passConfirmation"
  | "passPercent"
  | FormQuizKeySpecifier
)[];
export type FormQuizFieldPolicy = {
  failConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  grades?: FieldPolicy<any> | FieldReadFunction<any>;
  gradingType?: FieldPolicy<any> | FieldReadFunction<any>;
  hasInstantFeedback?: FieldPolicy<any> | FieldReadFunction<any>;
  hasLetterConfirmationMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPassFailConfirmationMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  isShuffleFieldsEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
  letterConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  maxScore?: FieldPolicy<any> | FieldReadFunction<any>;
  passConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  passPercent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormQuizConfirmationKeySpecifier = (
  | "isAutoformatted"
  | "message"
  | FormQuizConfirmationKeySpecifier
)[];
export type FormQuizConfirmationFieldPolicy = {
  isAutoformatted?: FieldPolicy<any> | FieldReadFunction<any>;
  message?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormQuizGradesKeySpecifier = (
  | "text"
  | "value"
  | FormQuizGradesKeySpecifier
)[];
export type FormQuizGradesFieldPolicy = {
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormSaveAndContinueKeySpecifier = (
  | "buttonText"
  | "hasSaveAndContinue"
  | FormSaveAndContinueKeySpecifier
)[];
export type FormSaveAndContinueFieldPolicy = {
  buttonText?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSaveAndContinue?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormScheduleKeySpecifier = (
  | "closedMessage"
  | "endDetails"
  | "hasSchedule"
  | "pendingMessage"
  | "startDetails"
  | FormScheduleKeySpecifier
)[];
export type FormScheduleFieldPolicy = {
  closedMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  endDetails?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSchedule?: FieldPolicy<any> | FieldReadFunction<any>;
  pendingMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  startDetails?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FormScheduleDetailsKeySpecifier = (
  | "amPm"
  | "date"
  | "dateGmt"
  | "hour"
  | "minute"
  | FormScheduleDetailsKeySpecifier
)[];
export type FormScheduleDetailsFieldPolicy = {
  amPm?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  hour?: FieldPolicy<any> | FieldReadFunction<any>;
  minute?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GeneralSettingsKeySpecifier = (
  | "dateFormat"
  | "description"
  | "email"
  | "language"
  | "startOfWeek"
  | "timeFormat"
  | "timezone"
  | "title"
  | "url"
  | GeneralSettingsKeySpecifier
)[];
export type GeneralSettingsFieldPolicy = {
  dateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  language?: FieldPolicy<any> | FieldReadFunction<any>;
  startOfWeek?: FieldPolicy<any> | FieldReadFunction<any>;
  timeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  timezone?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GenesisBlocksAnalyticsSettingsSettingsKeySpecifier = (
  | "genesisBlocksAnalyticsOptIn"
  | GenesisBlocksAnalyticsSettingsSettingsKeySpecifier
)[];
export type GenesisBlocksAnalyticsSettingsSettingsFieldPolicy = {
  genesisBlocksAnalyticsOptIn?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GenesisBlocksGlobalSettingsSettingsKeySpecifier = (
  | "genesisBlocksMailchimpApiKey"
  | GenesisBlocksGlobalSettingsSettingsKeySpecifier
)[];
export type GenesisBlocksGlobalSettingsSettingsFieldPolicy = {
  genesisBlocksMailchimpApiKey?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfDraftEntryKeySpecifier = (
  | "createdBy"
  | "createdByDatabaseId"
  | "createdById"
  | "dateCreated"
  | "dateCreatedGmt"
  | "dateUpdated"
  | "dateUpdatedGmt"
  | "form"
  | "formDatabaseId"
  | "formFields"
  | "formId"
  | "id"
  | "ip"
  | "isDraft"
  | "isSubmitted"
  | "resumeToken"
  | "sourceUrl"
  | "userAgent"
  | GfDraftEntryKeySpecifier
)[];
export type GfDraftEntryFieldPolicy = {
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  createdByDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdById?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  form?: FieldPolicy<any> | FieldReadFunction<any>;
  formDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  formFields?: FieldPolicy<any> | FieldReadFunction<any>;
  formId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  ip?: FieldPolicy<any> | FieldReadFunction<any>;
  isDraft?: FieldPolicy<any> | FieldReadFunction<any>;
  isSubmitted?: FieldPolicy<any> | FieldReadFunction<any>;
  resumeToken?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  userAgent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfEntryKeySpecifier = (
  | "createdBy"
  | "createdByDatabaseId"
  | "createdById"
  | "dateCreated"
  | "dateCreatedGmt"
  | "dateUpdated"
  | "dateUpdatedGmt"
  | "form"
  | "formDatabaseId"
  | "formFields"
  | "formId"
  | "id"
  | "ip"
  | "isDraft"
  | "isSubmitted"
  | "sourceUrl"
  | "userAgent"
  | GfEntryKeySpecifier
)[];
export type GfEntryFieldPolicy = {
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  createdByDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdById?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  form?: FieldPolicy<any> | FieldReadFunction<any>;
  formDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  formFields?: FieldPolicy<any> | FieldReadFunction<any>;
  formId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  ip?: FieldPolicy<any> | FieldReadFunction<any>;
  isDraft?: FieldPolicy<any> | FieldReadFunction<any>;
  isSubmitted?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  userAgent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfEntryToFormFieldConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | GfEntryToFormFieldConnectionKeySpecifier
)[];
export type GfEntryToFormFieldConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfEntryToFormFieldConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | GfEntryToFormFieldConnectionEdgeKeySpecifier
)[];
export type GfEntryToFormFieldConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfFormKeySpecifier = (
  | "button"
  | "confirmations"
  | "cssClass"
  | "customRequiredIndicator"
  | "databaseId"
  | "dateCreated"
  | "dateCreatedGmt"
  | "description"
  | "descriptionPlacement"
  | "entries"
  | "entryLimits"
  | "firstPageCssClass"
  | "formFields"
  | "formId"
  | "hasConditionalLogicAnimation"
  | "hasHoneypot"
  | "hasValidationSummary"
  | "id"
  | "isActive"
  | "isTrash"
  | "labelPlacement"
  | "lastPageButton"
  | "login"
  | "markupVersion"
  | "nextFieldId"
  | "notifications"
  | "pagination"
  | "personalData"
  | "postCreation"
  | "quiz"
  | "requiredIndicator"
  | "saveAndContinue"
  | "scheduling"
  | "subLabelPlacement"
  | "title"
  | "version"
  | GfFormKeySpecifier
)[];
export type GfFormFieldPolicy = {
  button?: FieldPolicy<any> | FieldReadFunction<any>;
  confirmations?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  customRequiredIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  entries?: FieldPolicy<any> | FieldReadFunction<any>;
  entryLimits?: FieldPolicy<any> | FieldReadFunction<any>;
  firstPageCssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  formFields?: FieldPolicy<any> | FieldReadFunction<any>;
  formId?: FieldPolicy<any> | FieldReadFunction<any>;
  hasConditionalLogicAnimation?: FieldPolicy<any> | FieldReadFunction<any>;
  hasHoneypot?: FieldPolicy<any> | FieldReadFunction<any>;
  hasValidationSummary?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isActive?: FieldPolicy<any> | FieldReadFunction<any>;
  isTrash?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  lastPageButton?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  markupVersion?: FieldPolicy<any> | FieldReadFunction<any>;
  nextFieldId?: FieldPolicy<any> | FieldReadFunction<any>;
  notifications?: FieldPolicy<any> | FieldReadFunction<any>;
  pagination?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postCreation?: FieldPolicy<any> | FieldReadFunction<any>;
  quiz?: FieldPolicy<any> | FieldReadFunction<any>;
  requiredIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  saveAndContinue?: FieldPolicy<any> | FieldReadFunction<any>;
  scheduling?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfFormToFormFieldConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | GfFormToFormFieldConnectionKeySpecifier
)[];
export type GfFormToFormFieldConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfFormToFormFieldConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | GfFormToFormFieldConnectionEdgeKeySpecifier
)[];
export type GfFormToFormFieldConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfFormToGfEntryConnectionKeySpecifier = (
  | "count"
  | "edges"
  | "nodes"
  | "pageInfo"
  | "quizResults"
  | GfFormToGfEntryConnectionKeySpecifier
)[];
export type GfFormToGfEntryConnectionFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  quizResults?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfFormToGfEntryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | GfFormToGfEntryConnectionEdgeKeySpecifier
)[];
export type GfFormToGfEntryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfLoggerKeySpecifier = (
  | "isEnabled"
  | "name"
  | GfLoggerKeySpecifier
)[];
export type GfLoggerFieldPolicy = {
  isEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsKeySpecifier = (
  | "averagePercentage"
  | "averageScore"
  | "entryCount"
  | "fieldCounts"
  | "gradeCounts"
  | "passRate"
  | "scoreCounts"
  | "sum"
  | GfQuizResultsKeySpecifier
)[];
export type GfQuizResultsFieldPolicy = {
  averagePercentage?: FieldPolicy<any> | FieldReadFunction<any>;
  averageScore?: FieldPolicy<any> | FieldReadFunction<any>;
  entryCount?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldCounts?: FieldPolicy<any> | FieldReadFunction<any>;
  gradeCounts?: FieldPolicy<any> | FieldReadFunction<any>;
  passRate?: FieldPolicy<any> | FieldReadFunction<any>;
  scoreCounts?: FieldPolicy<any> | FieldReadFunction<any>;
  sum?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsChoiceCountKeySpecifier = (
  | "count"
  | "text"
  | "value"
  | GfQuizResultsChoiceCountKeySpecifier
)[];
export type GfQuizResultsChoiceCountFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsFieldCountKeySpecifier = (
  | "choiceCounts"
  | "correctCount"
  | "fieldId"
  | "formField"
  | "incorrectCount"
  | GfQuizResultsFieldCountKeySpecifier
)[];
export type GfQuizResultsFieldCountFieldPolicy = {
  choiceCounts?: FieldPolicy<any> | FieldReadFunction<any>;
  correctCount?: FieldPolicy<any> | FieldReadFunction<any>;
  fieldId?: FieldPolicy<any> | FieldReadFunction<any>;
  formField?: FieldPolicy<any> | FieldReadFunction<any>;
  incorrectCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsFieldCountToQuizFieldConnectionEdgeKeySpecifier = (
  | "node"
  | GfQuizResultsFieldCountToQuizFieldConnectionEdgeKeySpecifier
)[];
export type GfQuizResultsFieldCountToQuizFieldConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsGradeCountKeySpecifier = (
  | "count"
  | "grade"
  | GfQuizResultsGradeCountKeySpecifier
)[];
export type GfQuizResultsGradeCountFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  grade?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfQuizResultsScoreCountKeySpecifier = (
  | "count"
  | "score"
  | GfQuizResultsScoreCountKeySpecifier
)[];
export type GfQuizResultsScoreCountFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  score?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfSettingsKeySpecifier = (
  | "currency"
  | "hasBackgroundUpdates"
  | "hasDefaultCss"
  | "hasToolbar"
  | "isHtml5Enabled"
  | "isNoConflictModeEnabled"
  | "logging"
  | GfSettingsKeySpecifier
)[];
export type GfSettingsFieldPolicy = {
  currency?: FieldPolicy<any> | FieldReadFunction<any>;
  hasBackgroundUpdates?: FieldPolicy<any> | FieldReadFunction<any>;
  hasDefaultCss?: FieldPolicy<any> | FieldReadFunction<any>;
  hasToolbar?: FieldPolicy<any> | FieldReadFunction<any>;
  isHtml5Enabled?: FieldPolicy<any> | FieldReadFunction<any>;
  isNoConflictModeEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
  logging?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfSettingsLoggingKeySpecifier = (
  | "isLoggingEnabled"
  | "loggers"
  | GfSettingsLoggingKeySpecifier
)[];
export type GfSettingsLoggingFieldPolicy = {
  isLoggingEnabled?: FieldPolicy<any> | FieldReadFunction<any>;
  loggers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type GfSubmittedEntryKeySpecifier = (
  | "createdBy"
  | "createdByDatabaseId"
  | "createdById"
  | "databaseId"
  | "dateCreated"
  | "dateCreatedGmt"
  | "dateUpdated"
  | "dateUpdatedGmt"
  | "entryId"
  | "form"
  | "formDatabaseId"
  | "formFields"
  | "formId"
  | "id"
  | "ip"
  | "isDraft"
  | "isRead"
  | "isStarred"
  | "isSubmitted"
  | "post"
  | "postDatabaseId"
  | "quizResults"
  | "sourceUrl"
  | "status"
  | "userAgent"
  | GfSubmittedEntryKeySpecifier
)[];
export type GfSubmittedEntryFieldPolicy = {
  createdBy?: FieldPolicy<any> | FieldReadFunction<any>;
  createdByDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  createdById?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateCreatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdated?: FieldPolicy<any> | FieldReadFunction<any>;
  dateUpdatedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  entryId?: FieldPolicy<any> | FieldReadFunction<any>;
  form?: FieldPolicy<any> | FieldReadFunction<any>;
  formDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  formFields?: FieldPolicy<any> | FieldReadFunction<any>;
  formId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  ip?: FieldPolicy<any> | FieldReadFunction<any>;
  isDraft?: FieldPolicy<any> | FieldReadFunction<any>;
  isRead?: FieldPolicy<any> | FieldReadFunction<any>;
  isStarred?: FieldPolicy<any> | FieldReadFunction<any>;
  isSubmitted?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
  postDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  quizResults?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  userAgent?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HiddenFieldKeySpecifier = (
  | "canPrepopulate"
  | "defaultValue"
  | "displayOnly"
  | "id"
  | "inputName"
  | "inputType"
  | "label"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | HiddenFieldKeySpecifier
)[];
export type HiddenFieldFieldPolicy = {
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeKeySpecifier = (
  | "ancestors"
  | "children"
  | "parent"
  | "parentDatabaseId"
  | "parentId"
  | HierarchicalContentNodeKeySpecifier
)[];
export type HierarchicalContentNodeFieldPolicy = {
  ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier =
  (
    | "edges"
    | "nodes"
    | "pageInfo"
    | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier
  )[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy =
  {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  };
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier =
  (
    | "cursor"
    | "node"
    | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier
  )[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy =
  {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
  };
export type HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier =
  (
    | "edges"
    | "nodes"
    | "pageInfo"
    | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier
  )[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy =
  {
    edges?: FieldPolicy<any> | FieldReadFunction<any>;
    nodes?: FieldPolicy<any> | FieldReadFunction<any>;
    pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  };
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier =
  (
    | "cursor"
    | "node"
    | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier
  )[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy =
  {
    cursor?: FieldPolicy<any> | FieldReadFunction<any>;
    node?: FieldPolicy<any> | FieldReadFunction<any>;
  };
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier =
  (
    | "node"
    | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier
  )[];
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy =
  {
    node?: FieldPolicy<any> | FieldReadFunction<any>;
  };
export type HierarchicalTermNodeKeySpecifier = (
  | "parentDatabaseId"
  | "parentId"
  | HierarchicalTermNodeKeySpecifier
)[];
export type HierarchicalTermNodeFieldPolicy = {
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type HtmlFieldKeySpecifier = (
  | "conditionalLogic"
  | "content"
  | "cssClass"
  | "displayOnly"
  | "hasMargins"
  | "id"
  | "inputType"
  | "label"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "type"
  | "visibility"
  | HtmlFieldKeySpecifier
)[];
export type HtmlFieldFieldPolicy = {
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  hasMargins?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ImageFieldValueKeySpecifier = (
  | "altText"
  | "caption"
  | "description"
  | "title"
  | "url"
  | ImageFieldValueKeySpecifier
)[];
export type ImageFieldValueFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  caption?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LikertFieldKeySpecifier = (
  | "displayOnly"
  | "id"
  | "inputType"
  | "isRequired"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | LikertFieldKeySpecifier
)[];
export type LikertFieldFieldPolicy = {
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListFieldKeySpecifier = (
  | "addIconUrl"
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "deleteIconUrl"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasColumns"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "listValues"
  | "maxRows"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | ListFieldKeySpecifier
)[];
export type ListFieldFieldPolicy = {
  addIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  listValues?: FieldPolicy<any> | FieldReadFunction<any>;
  maxRows?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListFieldChoiceKeySpecifier = (
  | "text"
  | "value"
  | ListFieldChoiceKeySpecifier
)[];
export type ListFieldChoiceFieldPolicy = {
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ListFieldValueKeySpecifier = (
  | "values"
  | ListFieldValueKeySpecifier
)[];
export type ListFieldValueFieldPolicy = {
  values?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type LoginPayloadKeySpecifier = (
  | "authToken"
  | "clientMutationId"
  | "refreshToken"
  | "user"
  | LoginPayloadKeySpecifier
)[];
export type LoginPayloadFieldPolicy = {
  authToken?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaDetailsKeySpecifier = (
  | "file"
  | "height"
  | "meta"
  | "sizes"
  | "width"
  | MediaDetailsKeySpecifier
)[];
export type MediaDetailsFieldPolicy = {
  file?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  meta?: FieldPolicy<any> | FieldReadFunction<any>;
  sizes?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemKeySpecifier = (
  | "altText"
  | "ancestors"
  | "author"
  | "authorDatabaseId"
  | "authorId"
  | "caption"
  | "children"
  | "commentCount"
  | "commentStatus"
  | "comments"
  | "contentType"
  | "contentTypeName"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "description"
  | "desiredSlug"
  | "editingLockedBy"
  | "enclosure"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "fileSize"
  | "guid"
  | "id"
  | "isContentNode"
  | "isPreview"
  | "isRestricted"
  | "isTermNode"
  | "lastEditedBy"
  | "link"
  | "mediaDetails"
  | "mediaItemId"
  | "mediaItemUrl"
  | "mediaType"
  | "mimeType"
  | "modified"
  | "modifiedGmt"
  | "parent"
  | "parentDatabaseId"
  | "parentId"
  | "previewRevisionDatabaseId"
  | "previewRevisionId"
  | "seo"
  | "sizes"
  | "slug"
  | "sourceUrl"
  | "srcSet"
  | "status"
  | "template"
  | "title"
  | "uri"
  | MediaItemKeySpecifier
)[];
export type MediaItemFieldPolicy = {
  altText?: FieldPolicy<any> | FieldReadFunction<any>;
  ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  caption?: FieldPolicy<any> | FieldReadFunction<any>;
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
  commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  fileSize?: FieldPolicy<any> | FieldReadFunction<any>;
  guid?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaDetails?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItemId?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItemUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaType?: FieldPolicy<any> | FieldReadFunction<any>;
  mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  sizes?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  srcSet?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  template?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemMetaKeySpecifier = (
  | "aperture"
  | "camera"
  | "caption"
  | "copyright"
  | "createdTimestamp"
  | "credit"
  | "focalLength"
  | "iso"
  | "keywords"
  | "orientation"
  | "shutterSpeed"
  | "title"
  | MediaItemMetaKeySpecifier
)[];
export type MediaItemMetaFieldPolicy = {
  aperture?: FieldPolicy<any> | FieldReadFunction<any>;
  camera?: FieldPolicy<any> | FieldReadFunction<any>;
  caption?: FieldPolicy<any> | FieldReadFunction<any>;
  copyright?: FieldPolicy<any> | FieldReadFunction<any>;
  createdTimestamp?: FieldPolicy<any> | FieldReadFunction<any>;
  credit?: FieldPolicy<any> | FieldReadFunction<any>;
  focalLength?: FieldPolicy<any> | FieldReadFunction<any>;
  iso?: FieldPolicy<any> | FieldReadFunction<any>;
  keywords?: FieldPolicy<any> | FieldReadFunction<any>;
  orientation?: FieldPolicy<any> | FieldReadFunction<any>;
  shutterSpeed?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | MediaItemToCommentConnectionKeySpecifier
)[];
export type MediaItemToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaItemToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | MediaItemToCommentConnectionEdgeKeySpecifier
)[];
export type MediaItemToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MediaSizeKeySpecifier = (
  | "file"
  | "fileSize"
  | "height"
  | "mimeType"
  | "name"
  | "sourceUrl"
  | "width"
  | MediaSizeKeySpecifier
)[];
export type MediaSizeFieldPolicy = {
  file?: FieldPolicy<any> | FieldReadFunction<any>;
  fileSize?: FieldPolicy<any> | FieldReadFunction<any>;
  height?: FieldPolicy<any> | FieldReadFunction<any>;
  mimeType?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  width?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuKeySpecifier = (
  | "count"
  | "databaseId"
  | "id"
  | "isRestricted"
  | "locations"
  | "menuId"
  | "menuItems"
  | "name"
  | "slug"
  | MenuKeySpecifier
)[];
export type MenuFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  menuId?: FieldPolicy<any> | FieldReadFunction<any>;
  menuItems?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemKeySpecifier = (
  | "childItems"
  | "connectedNode"
  | "connectedObject"
  | "cssClasses"
  | "databaseId"
  | "description"
  | "id"
  | "isRestricted"
  | "label"
  | "linkRelationship"
  | "locations"
  | "menu"
  | "menuItemId"
  | "order"
  | "parentDatabaseId"
  | "parentId"
  | "path"
  | "target"
  | "title"
  | "url"
  | MenuItemKeySpecifier
)[];
export type MenuItemFieldPolicy = {
  childItems?: FieldPolicy<any> | FieldReadFunction<any>;
  connectedNode?: FieldPolicy<any> | FieldReadFunction<any>;
  connectedObject?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClasses?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  linkRelationship?: FieldPolicy<any> | FieldReadFunction<any>;
  locations?: FieldPolicy<any> | FieldReadFunction<any>;
  menu?: FieldPolicy<any> | FieldReadFunction<any>;
  menuItemId?: FieldPolicy<any> | FieldReadFunction<any>;
  order?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  target?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemLinkableKeySpecifier = (
  | "databaseId"
  | "id"
  | "uri"
  | MenuItemLinkableKeySpecifier
)[];
export type MenuItemLinkableFieldPolicy = {
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuConnectionEdgeKeySpecifier = (
  | "node"
  | MenuItemToMenuConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | MenuItemToMenuItemConnectionKeySpecifier
)[];
export type MenuItemToMenuItemConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | MenuItemToMenuItemConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuItemConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier = (
  | "node"
  | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier
)[];
export type MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuToMenuItemConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | MenuToMenuItemConnectionKeySpecifier
)[];
export type MenuToMenuItemConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MenuToMenuItemConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | MenuToMenuItemConnectionEdgeKeySpecifier
)[];
export type MenuToMenuItemConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MultiSelectFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "size"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | MultiSelectFieldKeySpecifier
)[];
export type MultiSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MultiSelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | MultiSelectFieldChoiceKeySpecifier
)[];
export type MultiSelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NameFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "nameValues"
  | "pageNumber"
  | "personalData"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | NameFieldKeySpecifier
)[];
export type NameFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  nameValues?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NameFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | NameFieldChoiceKeySpecifier
)[];
export type NameFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NameFieldValueKeySpecifier = (
  | "first"
  | "last"
  | "middle"
  | "prefix"
  | "suffix"
  | NameFieldValueKeySpecifier
)[];
export type NameFieldValueFieldPolicy = {
  first?: FieldPolicy<any> | FieldReadFunction<any>;
  last?: FieldPolicy<any> | FieldReadFunction<any>;
  middle?: FieldPolicy<any> | FieldReadFunction<any>;
  prefix?: FieldPolicy<any> | FieldReadFunction<any>;
  suffix?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NameInputPropertyKeySpecifier = (
  | "autocompleteAttribute"
  | "choices"
  | "customLabel"
  | "defaultValue"
  | "hasChoiceValue"
  | "id"
  | "isHidden"
  | "key"
  | "label"
  | "name"
  | "placeholder"
  | NameInputPropertyKeySpecifier
)[];
export type NameInputPropertyFieldPolicy = {
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  key?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeKeySpecifier = ("id" | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithAuthorKeySpecifier = (
  | "author"
  | "authorDatabaseId"
  | "authorId"
  | NodeWithAuthorKeySpecifier
)[];
export type NodeWithAuthorFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithAuthorToUserConnectionEdgeKeySpecifier = (
  | "node"
  | NodeWithAuthorToUserConnectionEdgeKeySpecifier
)[];
export type NodeWithAuthorToUserConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithCommentsKeySpecifier = (
  | "commentCount"
  | "commentStatus"
  | NodeWithCommentsKeySpecifier
)[];
export type NodeWithCommentsFieldPolicy = {
  commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
  commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithContentEditorKeySpecifier = (
  | "content"
  | NodeWithContentEditorKeySpecifier
)[];
export type NodeWithContentEditorFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithExcerptKeySpecifier = (
  | "excerpt"
  | NodeWithExcerptKeySpecifier
)[];
export type NodeWithExcerptFieldPolicy = {
  excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithFeaturedImageKeySpecifier = (
  | "contentType"
  | "contentTypeName"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "desiredSlug"
  | "editingLockedBy"
  | "enclosure"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "featuredImage"
  | "featuredImageDatabaseId"
  | "featuredImageId"
  | "guid"
  | "id"
  | "isContentNode"
  | "isPreview"
  | "isRestricted"
  | "isTermNode"
  | "lastEditedBy"
  | "link"
  | "modified"
  | "modifiedGmt"
  | "previewRevisionDatabaseId"
  | "previewRevisionId"
  | "slug"
  | "status"
  | "template"
  | "uri"
  | NodeWithFeaturedImageKeySpecifier
)[];
export type NodeWithFeaturedImageFieldPolicy = {
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
  guid?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  template?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier = (
  | "node"
  | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier
)[];
export type NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithFormKeySpecifier = (
  | "form"
  | "formDatabaseId"
  | "formId"
  | NodeWithFormKeySpecifier
)[];
export type NodeWithFormFieldPolicy = {
  form?: FieldPolicy<any> | FieldReadFunction<any>;
  formDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  formId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithPageAttributesKeySpecifier = (
  | "menuOrder"
  | NodeWithPageAttributesKeySpecifier
)[];
export type NodeWithPageAttributesFieldPolicy = {
  menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithRevisionsKeySpecifier = (
  | "isRevision"
  | "revisionOf"
  | NodeWithRevisionsKeySpecifier
)[];
export type NodeWithRevisionsFieldPolicy = {
  isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
  revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier = (
  | "node"
  | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier
)[];
export type NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTemplateKeySpecifier = (
  | "template"
  | NodeWithTemplateKeySpecifier
)[];
export type NodeWithTemplateFieldPolicy = {
  template?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTitleKeySpecifier = ("title" | NodeWithTitleKeySpecifier)[];
export type NodeWithTitleFieldPolicy = {
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NodeWithTrackbacksKeySpecifier = (
  | "pingStatus"
  | "pinged"
  | "toPing"
  | NodeWithTrackbacksKeySpecifier
)[];
export type NodeWithTrackbacksFieldPolicy = {
  pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  pinged?: FieldPolicy<any> | FieldReadFunction<any>;
  toPing?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type NumberFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "calculationFormula"
  | "calculationRounding"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "isCalculation"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "numberFormat"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "rangeMax"
  | "rangeMin"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | NumberFieldKeySpecifier
)[];
export type NumberFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  calculationFormula?: FieldPolicy<any> | FieldReadFunction<any>;
  calculationRounding?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isCalculation?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  numberFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  rangeMax?: FieldPolicy<any> | FieldReadFunction<any>;
  rangeMin?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageKeySpecifier = (
  | "ancestors"
  | "author"
  | "authorDatabaseId"
  | "authorId"
  | "children"
  | "commentCount"
  | "commentStatus"
  | "comments"
  | "content"
  | "contentType"
  | "contentTypeName"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "desiredSlug"
  | "editingLockedBy"
  | "enclosure"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "excerpt"
  | "featuredImage"
  | "featuredImageDatabaseId"
  | "featuredImageId"
  | "guid"
  | "id"
  | "isContentNode"
  | "isFrontPage"
  | "isPostsPage"
  | "isPreview"
  | "isPrivacyPage"
  | "isRestricted"
  | "isRevision"
  | "isTermNode"
  | "lastEditedBy"
  | "link"
  | "menuOrder"
  | "modified"
  | "modifiedGmt"
  | "pageId"
  | "parent"
  | "parentDatabaseId"
  | "parentId"
  | "preview"
  | "previewRevisionDatabaseId"
  | "previewRevisionId"
  | "revisionOf"
  | "revisions"
  | "seo"
  | "slug"
  | "status"
  | "template"
  | "title"
  | "uri"
  | PageKeySpecifier
)[];
export type PageFieldPolicy = {
  ancestors?: FieldPolicy<any> | FieldReadFunction<any>;
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
  commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
  guid?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>;
  isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
  isPrivacyPage?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  menuOrder?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  pageId?: FieldPolicy<any> | FieldReadFunction<any>;
  parent?: FieldPolicy<any> | FieldReadFunction<any>;
  parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  parentId?: FieldPolicy<any> | FieldReadFunction<any>;
  preview?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
  revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
  revisions?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  template?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageFieldKeySpecifier = (
  | "conditionalLogic"
  | "cssClass"
  | "displayOnly"
  | "id"
  | "inputType"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "nextButton"
  | "pageNumber"
  | "previousButton"
  | "type"
  | "visibility"
  | PageFieldKeySpecifier
)[];
export type PageFieldFieldPolicy = {
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  nextButton?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  previousButton?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PageToCommentConnectionKeySpecifier
)[];
export type PageToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PageToCommentConnectionEdgeKeySpecifier
)[];
export type PageToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToPreviewConnectionEdgeKeySpecifier = (
  | "node"
  | PageToPreviewConnectionEdgeKeySpecifier
)[];
export type PageToPreviewConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToRevisionConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PageToRevisionConnectionKeySpecifier
)[];
export type PageToRevisionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageToRevisionConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PageToRevisionConnectionEdgeKeySpecifier
)[];
export type PageToRevisionConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PasswordFieldKeySpecifier = (
  | "adminLabel"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasPasswordStrengthIndicator"
  | "hasPasswordVisibilityToggle"
  | "id"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "minPasswordStrength"
  | "pageNumber"
  | "personalData"
  | "size"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | PasswordFieldKeySpecifier
)[];
export type PasswordFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPasswordStrengthIndicator?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPasswordVisibilityToggle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  minPasswordStrength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PasswordInputPropertyKeySpecifier = (
  | "customLabel"
  | "id"
  | "isHidden"
  | "label"
  | "placeholder"
  | PasswordInputPropertyKeySpecifier
)[];
export type PasswordInputPropertyFieldPolicy = {
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isHidden?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PhoneFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "phoneFormat"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PhoneFieldKeySpecifier
)[];
export type PhoneFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PluginKeySpecifier = (
  | "author"
  | "authorUri"
  | "description"
  | "id"
  | "isRestricted"
  | "name"
  | "path"
  | "pluginUri"
  | "version"
  | PluginKeySpecifier
)[];
export type PluginFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorUri?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  path?: FieldPolicy<any> | FieldReadFunction<any>;
  pluginUri?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PollFieldKeySpecifier = (
  | "displayOnly"
  | "id"
  | "inputType"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | PollFieldKeySpecifier
)[];
export type PollFieldFieldPolicy = {
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostKeySpecifier = (
  | "author"
  | "authorDatabaseId"
  | "authorId"
  | "categories"
  | "commentCount"
  | "commentStatus"
  | "comments"
  | "content"
  | "contentType"
  | "contentTypeName"
  | "databaseId"
  | "date"
  | "dateGmt"
  | "desiredSlug"
  | "editingLockedBy"
  | "enclosure"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "excerpt"
  | "featuredImage"
  | "featuredImageDatabaseId"
  | "featuredImageId"
  | "guid"
  | "id"
  | "isContentNode"
  | "isPreview"
  | "isRestricted"
  | "isRevision"
  | "isSticky"
  | "isTermNode"
  | "lastEditedBy"
  | "link"
  | "modified"
  | "modifiedGmt"
  | "pingStatus"
  | "pinged"
  | "postFormats"
  | "postId"
  | "preview"
  | "previewRevisionDatabaseId"
  | "previewRevisionId"
  | "revisionOf"
  | "revisions"
  | "seo"
  | "slug"
  | "status"
  | "tags"
  | "template"
  | "terms"
  | "title"
  | "toPing"
  | "uri"
  | PostKeySpecifier
)[];
export type PostFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  authorId?: FieldPolicy<any> | FieldReadFunction<any>;
  categories?: FieldPolicy<any> | FieldReadFunction<any>;
  commentCount?: FieldPolicy<any> | FieldReadFunction<any>;
  commentStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  dateGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  enclosure?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  excerpt?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>;
  guid?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isPreview?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isRevision?: FieldPolicy<any> | FieldReadFunction<any>;
  isSticky?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  modified?: FieldPolicy<any> | FieldReadFunction<any>;
  modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>;
  pingStatus?: FieldPolicy<any> | FieldReadFunction<any>;
  pinged?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
  postId?: FieldPolicy<any> | FieldReadFunction<any>;
  preview?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>;
  revisionOf?: FieldPolicy<any> | FieldReadFunction<any>;
  revisions?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  status?: FieldPolicy<any> | FieldReadFunction<any>;
  tags?: FieldPolicy<any> | FieldReadFunction<any>;
  template?: FieldPolicy<any> | FieldReadFunction<any>;
  terms?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  toPing?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryCheckboxFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "checkboxValues"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "dropdownPlaceholder"
  | "errorMessage"
  | "hasAllCategories"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCategoryCheckboxFieldKeySpecifier
)[];
export type PostCategoryCheckboxFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxValues?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  dropdownPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "dropdownPlaceholder"
  | "errorMessage"
  | "hasAllCategories"
  | "hasChoiceValue"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCategoryFieldKeySpecifier
)[];
export type PostCategoryFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  dropdownPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostCategoryFieldChoiceKeySpecifier
)[];
export type PostCategoryFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | PostCategoryInputPropertyKeySpecifier
)[];
export type PostCategoryInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryMultiSelectFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "dropdownPlaceholder"
  | "errorMessage"
  | "hasAllCategories"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | PostCategoryMultiSelectFieldKeySpecifier
)[];
export type PostCategoryMultiSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  dropdownPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategoryRadioFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "dropdownPlaceholder"
  | "errorMessage"
  | "hasAllCategories"
  | "hasChoiceValue"
  | "hasOtherChoice"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCategoryRadioFieldKeySpecifier
)[];
export type PostCategoryRadioFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  dropdownPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCategorySelectFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "dropdownPlaceholder"
  | "errorMessage"
  | "hasAllCategories"
  | "hasAutocomplete"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCategorySelectFieldKeySpecifier
)[];
export type PostCategorySelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  dropdownPlaceholder?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAllCategories?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostContentFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasRichTextEditor"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostContentFieldKeySpecifier
)[];
export type PostContentFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasRichTextEditor?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomCheckboxFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "checkboxValues"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomCheckboxFieldKeySpecifier
)[];
export type PostCustomCheckboxFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxValues?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomCheckboxFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostCustomCheckboxFieldChoiceKeySpecifier
)[];
export type PostCustomCheckboxFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomDateFieldKeySpecifier = (
  | "adminLabel"
  | "calendarIconType"
  | "calendarIconUrl"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "dateFormat"
  | "dateType"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | PostCustomDateFieldKeySpecifier
)[];
export type PostCustomDateFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  calendarIconType?: FieldPolicy<any> | FieldReadFunction<any>;
  calendarIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  dateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  dateType?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomEmailFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasEmailConfirmation"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | PostCustomEmailFieldKeySpecifier
)[];
export type PostCustomEmailFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEmailConfirmation?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomFieldKeySpecifier
)[];
export type PostCustomFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomFileuploadFieldKeySpecifier = (
  | "adminLabel"
  | "allowedExtensions"
  | "canAcceptMultipleFiles"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxFileSize"
  | "maxFiles"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | PostCustomFileuploadFieldKeySpecifier
)[];
export type PostCustomFileuploadFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  allowedExtensions?: FieldPolicy<any> | FieldReadFunction<any>;
  canAcceptMultipleFiles?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxFileSize?: FieldPolicy<any> | FieldReadFunction<any>;
  maxFiles?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomHiddenFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomHiddenFieldKeySpecifier
)[];
export type PostCustomHiddenFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | PostCustomInputPropertyKeySpecifier
)[];
export type PostCustomInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomListFieldKeySpecifier = (
  | "addIconUrl"
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "deleteIconUrl"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasColumns"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "listValues"
  | "maxRows"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomListFieldKeySpecifier
)[];
export type PostCustomListFieldFieldPolicy = {
  addIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteIconUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasColumns?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  listValues?: FieldPolicy<any> | FieldReadFunction<any>;
  maxRows?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomListFieldChoiceKeySpecifier = (
  | "text"
  | "value"
  | PostCustomListFieldChoiceKeySpecifier
)[];
export type PostCustomListFieldChoiceFieldPolicy = {
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomMultiSelectFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | PostCustomMultiSelectFieldKeySpecifier
)[];
export type PostCustomMultiSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomMultiSelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostCustomMultiSelectFieldChoiceKeySpecifier
)[];
export type PostCustomMultiSelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomNumberFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "calculationFormula"
  | "calculationRounding"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "isCalculation"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "numberFormat"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "rangeMax"
  | "rangeMin"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomNumberFieldKeySpecifier
)[];
export type PostCustomNumberFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  calculationFormula?: FieldPolicy<any> | FieldReadFunction<any>;
  calculationRounding?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isCalculation?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  numberFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  rangeMax?: FieldPolicy<any> | FieldReadFunction<any>;
  rangeMin?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomPhoneFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "phoneFormat"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomPhoneFieldKeySpecifier
)[];
export type PostCustomPhoneFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  phoneFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomRadioFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasOtherChoice"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomRadioFieldKeySpecifier
)[];
export type PostCustomRadioFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomRadioFieldChoiceKeySpecifier = (
  | "isOtherChoice"
  | "isSelected"
  | "text"
  | "value"
  | PostCustomRadioFieldChoiceKeySpecifier
)[];
export type PostCustomRadioFieldChoiceFieldPolicy = {
  isOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomSelectFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomSelectFieldKeySpecifier
)[];
export type PostCustomSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomSelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostCustomSelectFieldChoiceKeySpecifier
)[];
export type PostCustomSelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomTextAreaFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasRichTextEditor"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomTextAreaFieldKeySpecifier
)[];
export type PostCustomTextAreaFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasRichTextEditor?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomTextFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasInputMask"
  | "id"
  | "inputMaskValue"
  | "inputName"
  | "inputType"
  | "isPasswordInput"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomTextFieldKeySpecifier
)[];
export type PostCustomTextFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasInputMask?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputMaskValue?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isPasswordInput?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomTimeFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "subLabelPlacement"
  | "timeFormat"
  | "timeValues"
  | "type"
  | "value"
  | "visibility"
  | PostCustomTimeFieldKeySpecifier
)[];
export type PostCustomTimeFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  timeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  timeValues?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostCustomWebsiteFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "postMetaFieldName"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostCustomWebsiteFieldKeySpecifier
)[];
export type PostCustomWebsiteFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  postMetaFieldName?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostExcerptFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostExcerptFieldKeySpecifier
)[];
export type PostExcerptFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatKeySpecifier = (
  | "contentNodes"
  | "count"
  | "databaseId"
  | "description"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "id"
  | "isContentNode"
  | "isRestricted"
  | "isTermNode"
  | "link"
  | "name"
  | "postFormatId"
  | "posts"
  | "seo"
  | "slug"
  | "taxonomy"
  | "taxonomyName"
  | "termGroupId"
  | "termTaxonomyId"
  | "uri"
  | PostFormatKeySpecifier
)[];
export type PostFormatFieldPolicy = {
  contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormatId?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>;
  termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
  termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToContentNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostFormatToContentNodeConnectionKeySpecifier
)[];
export type PostFormatToContentNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToContentNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PostFormatToContentNodeConnectionEdgeKeySpecifier
)[];
export type PostFormatToContentNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPostConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostFormatToPostConnectionKeySpecifier
)[];
export type PostFormatToPostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToPostConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PostFormatToPostConnectionEdgeKeySpecifier
)[];
export type PostFormatToPostConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostFormatToTaxonomyConnectionEdgeKeySpecifier = (
  | "node"
  | PostFormatToTaxonomyConnectionEdgeKeySpecifier
)[];
export type PostFormatToTaxonomyConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostImageFieldKeySpecifier = (
  | "adminLabel"
  | "allowedExtensions"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAlt"
  | "hasCaption"
  | "hasDescription"
  | "hasTitle"
  | "id"
  | "imageValues"
  | "inputType"
  | "isFeaturedImage"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "subLabelPlacement"
  | "type"
  | "value"
  | "visibility"
  | PostImageFieldKeySpecifier
)[];
export type PostImageFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  allowedExtensions?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAlt?: FieldPolicy<any> | FieldReadFunction<any>;
  hasCaption?: FieldPolicy<any> | FieldReadFunction<any>;
  hasDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  hasTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  imageValues?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsCheckboxFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "checkboxValues"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTagsCheckboxFieldKeySpecifier
)[];
export type PostTagsCheckboxFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxValues?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsCheckboxFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostTagsCheckboxFieldChoiceKeySpecifier
)[];
export type PostTagsCheckboxFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTagsFieldKeySpecifier
)[];
export type PostTagsFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | PostTagsInputPropertyKeySpecifier
)[];
export type PostTagsInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsMultiSelectFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "values"
  | "visibility"
  | PostTagsMultiSelectFieldKeySpecifier
)[];
export type PostTagsMultiSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  values?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsMultiSelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostTagsMultiSelectFieldChoiceKeySpecifier
)[];
export type PostTagsMultiSelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsRadioFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasOtherChoice"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTagsRadioFieldKeySpecifier
)[];
export type PostTagsRadioFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsRadioFieldChoiceKeySpecifier = (
  | "isOtherChoice"
  | "isSelected"
  | "text"
  | "value"
  | PostTagsRadioFieldChoiceKeySpecifier
)[];
export type PostTagsRadioFieldChoiceFieldPolicy = {
  isOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsSelectFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTagsSelectFieldKeySpecifier
)[];
export type PostTagsSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsSelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | PostTagsSelectFieldChoiceKeySpecifier
)[];
export type PostTagsSelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTagsTextFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasInputMask"
  | "id"
  | "inputMaskValue"
  | "inputName"
  | "inputType"
  | "isPasswordInput"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTagsTextFieldKeySpecifier
)[];
export type PostTagsTextFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasInputMask?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputMaskValue?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isPasswordInput?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTitleFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | PostTitleFieldKeySpecifier
)[];
export type PostTitleFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCategoryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToCategoryConnectionKeySpecifier
)[];
export type PostToCategoryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCategoryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "isPrimary"
  | "node"
  | PostToCategoryConnectionEdgeKeySpecifier
)[];
export type PostToCategoryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToCommentConnectionKeySpecifier
)[];
export type PostToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PostToCommentConnectionEdgeKeySpecifier
)[];
export type PostToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPostFormatConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToPostFormatConnectionKeySpecifier
)[];
export type PostToPostFormatConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPostFormatConnectionEdgeKeySpecifier = (
  | "cursor"
  | "isPrimary"
  | "node"
  | PostToPostFormatConnectionEdgeKeySpecifier
)[];
export type PostToPostFormatConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToPreviewConnectionEdgeKeySpecifier = (
  | "node"
  | PostToPreviewConnectionEdgeKeySpecifier
)[];
export type PostToPreviewConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToRevisionConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToRevisionConnectionKeySpecifier
)[];
export type PostToRevisionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToRevisionConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PostToRevisionConnectionEdgeKeySpecifier
)[];
export type PostToRevisionConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTagConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToTagConnectionKeySpecifier
)[];
export type PostToTagConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTagConnectionEdgeKeySpecifier = (
  | "cursor"
  | "isPrimary"
  | "node"
  | PostToTagConnectionEdgeKeySpecifier
)[];
export type PostToTagConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  isPrimary?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTermNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | PostToTermNodeConnectionKeySpecifier
)[];
export type PostToTermNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostToTermNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | PostToTermNodeConnectionEdgeKeySpecifier
)[];
export type PostToTermNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTypeLabelDetailsKeySpecifier = (
  | "addNew"
  | "addNewItem"
  | "allItems"
  | "archives"
  | "attributes"
  | "editItem"
  | "featuredImage"
  | "filterItemsList"
  | "insertIntoItem"
  | "itemsList"
  | "itemsListNavigation"
  | "menuName"
  | "name"
  | "newItem"
  | "notFound"
  | "notFoundInTrash"
  | "parentItemColon"
  | "removeFeaturedImage"
  | "searchItems"
  | "setFeaturedImage"
  | "singularName"
  | "uploadedToThisItem"
  | "useFeaturedImage"
  | "viewItem"
  | "viewItems"
  | PostTypeLabelDetailsKeySpecifier
)[];
export type PostTypeLabelDetailsFieldPolicy = {
  addNew?: FieldPolicy<any> | FieldReadFunction<any>;
  addNewItem?: FieldPolicy<any> | FieldReadFunction<any>;
  allItems?: FieldPolicy<any> | FieldReadFunction<any>;
  archives?: FieldPolicy<any> | FieldReadFunction<any>;
  attributes?: FieldPolicy<any> | FieldReadFunction<any>;
  editItem?: FieldPolicy<any> | FieldReadFunction<any>;
  featuredImage?: FieldPolicy<any> | FieldReadFunction<any>;
  filterItemsList?: FieldPolicy<any> | FieldReadFunction<any>;
  insertIntoItem?: FieldPolicy<any> | FieldReadFunction<any>;
  itemsList?: FieldPolicy<any> | FieldReadFunction<any>;
  itemsListNavigation?: FieldPolicy<any> | FieldReadFunction<any>;
  menuName?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  newItem?: FieldPolicy<any> | FieldReadFunction<any>;
  notFound?: FieldPolicy<any> | FieldReadFunction<any>;
  notFoundInTrash?: FieldPolicy<any> | FieldReadFunction<any>;
  parentItemColon?: FieldPolicy<any> | FieldReadFunction<any>;
  removeFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
  searchItems?: FieldPolicy<any> | FieldReadFunction<any>;
  setFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
  singularName?: FieldPolicy<any> | FieldReadFunction<any>;
  uploadedToThisItem?: FieldPolicy<any> | FieldReadFunction<any>;
  useFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>;
  viewItem?: FieldPolicy<any> | FieldReadFunction<any>;
  viewItems?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PostTypeSEOKeySpecifier = (
  | "breadcrumbs"
  | "canonical"
  | "cornerstone"
  | "focuskw"
  | "fullHead"
  | "metaDesc"
  | "metaKeywords"
  | "metaRobotsNofollow"
  | "metaRobotsNoindex"
  | "opengraphAuthor"
  | "opengraphDescription"
  | "opengraphImage"
  | "opengraphModifiedTime"
  | "opengraphPublishedTime"
  | "opengraphPublisher"
  | "opengraphSiteName"
  | "opengraphTitle"
  | "opengraphType"
  | "opengraphUrl"
  | "readingTime"
  | "schema"
  | "title"
  | "twitterDescription"
  | "twitterImage"
  | "twitterTitle"
  | PostTypeSEOKeySpecifier
)[];
export type PostTypeSEOFieldPolicy = {
  breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
  canonical?: FieldPolicy<any> | FieldReadFunction<any>;
  cornerstone?: FieldPolicy<any> | FieldReadFunction<any>;
  focuskw?: FieldPolicy<any> | FieldReadFunction<any>;
  fullHead?: FieldPolicy<any> | FieldReadFunction<any>;
  metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
  metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphType?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  readingTime?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterImage?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizCheckboxFieldKeySpecifier = (
  | "adminLabel"
  | "answerExplanation"
  | "canPrepopulate"
  | "checkboxValues"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "hasWeightedScore"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldRandomizeQuizChoices"
  | "shouldShowAnswerExplanation"
  | "type"
  | "value"
  | "visibility"
  | QuizCheckboxFieldKeySpecifier
)[];
export type QuizCheckboxFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  answerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkboxValues?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  hasWeightedScore?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldRandomizeQuizChoices?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldShowAnswerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizFieldKeySpecifier = (
  | "adminLabel"
  | "answerExplanation"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasWeightedScore"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldRandomizeQuizChoices"
  | "shouldShowAnswerExplanation"
  | "type"
  | "value"
  | "visibility"
  | QuizFieldKeySpecifier
)[];
export type QuizFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  answerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasWeightedScore?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldRandomizeQuizChoices?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldShowAnswerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizFieldChoiceKeySpecifier = (
  | "isCorrect"
  | "isOtherChoice"
  | "isSelected"
  | "text"
  | "value"
  | "weight"
  | QuizFieldChoiceKeySpecifier
)[];
export type QuizFieldChoiceFieldPolicy = {
  isCorrect?: FieldPolicy<any> | FieldReadFunction<any>;
  isOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  weight?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | QuizInputPropertyKeySpecifier
)[];
export type QuizInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizRadioFieldKeySpecifier = (
  | "adminLabel"
  | "answerExplanation"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasOtherChoice"
  | "hasWeightedScore"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "shouldRandomizeQuizChoices"
  | "shouldShowAnswerExplanation"
  | "type"
  | "value"
  | "visibility"
  | QuizRadioFieldKeySpecifier
)[];
export type QuizRadioFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  answerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  hasWeightedScore?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldRandomizeQuizChoices?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldShowAnswerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QuizSelectFieldKeySpecifier = (
  | "adminLabel"
  | "answerExplanation"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "hasWeightedScore"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "shouldRandomizeQuizChoices"
  | "shouldShowAnswerExplanation"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | QuizSelectFieldKeySpecifier
)[];
export type QuizSelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  answerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  hasWeightedScore?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldRandomizeQuizChoices?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldShowAnswerExplanation?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RadioFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasOtherChoice"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "type"
  | "value"
  | "visibility"
  | RadioFieldKeySpecifier
)[];
export type RadioFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RadioFieldChoiceKeySpecifier = (
  | "isOtherChoice"
  | "isSelected"
  | "text"
  | "value"
  | RadioFieldChoiceKeySpecifier
)[];
export type RadioFieldChoiceFieldPolicy = {
  isOtherChoice?: FieldPolicy<any> | FieldReadFunction<any>;
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RankFieldKeySpecifier = (
  | "choices"
  | "displayOnly"
  | "hasChoiceValue"
  | "id"
  | "inputType"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | RankFieldKeySpecifier
)[];
export type RankFieldFieldPolicy = {
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RankFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | RankFieldChoiceKeySpecifier
)[];
export type RankFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RatingFieldKeySpecifier = (
  | "choices"
  | "displayOnly"
  | "hasChoiceValue"
  | "id"
  | "inputType"
  | "isRequired"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | RatingFieldKeySpecifier
)[];
export type RatingFieldFieldPolicy = {
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RatingFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | RatingFieldChoiceKeySpecifier
)[];
export type RatingFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ReadingSettingsKeySpecifier = (
  | "postsPerPage"
  | ReadingSettingsKeySpecifier
)[];
export type ReadingSettingsFieldPolicy = {
  postsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RecaptchaFieldKeySpecifier = (
  | "displayOnly"
  | "id"
  | "inputType"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "type"
  | "visibility"
  | RecaptchaFieldKeySpecifier
)[];
export type RecaptchaFieldFieldPolicy = {
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RefreshJwtAuthTokenPayloadKeySpecifier = (
  | "authToken"
  | "clientMutationId"
  | RefreshJwtAuthTokenPayloadKeySpecifier
)[];
export type RefreshJwtAuthTokenPayloadFieldPolicy = {
  authToken?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RegisterUserPayloadKeySpecifier = (
  | "clientMutationId"
  | "user"
  | RegisterUserPayloadKeySpecifier
)[];
export type RegisterUserPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RememberMeFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasChoiceValue"
  | "hasSelectAll"
  | "id"
  | "inputName"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | RememberMeFieldKeySpecifier
)[];
export type RememberMeFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSelectAll?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RememberMeFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | RememberMeFieldChoiceKeySpecifier
)[];
export type RememberMeFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RememberMeInputPropertyKeySpecifier = (
  | "id"
  | "label"
  | "name"
  | RememberMeInputPropertyKeySpecifier
)[];
export type RememberMeInputPropertyFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ResetUserPasswordPayloadKeySpecifier = (
  | "clientMutationId"
  | "user"
  | ResetUserPasswordPayloadKeySpecifier
)[];
export type ResetUserPasswordPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RestoreCommentPayloadKeySpecifier = (
  | "clientMutationId"
  | "comment"
  | "restoredId"
  | RestoreCommentPayloadKeySpecifier
)[];
export type RestoreCommentPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  restoredId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootMutationKeySpecifier = (
  | "createCategory"
  | "createComment"
  | "createMediaItem"
  | "createPage"
  | "createPost"
  | "createPostFormat"
  | "createTag"
  | "createUser"
  | "deleteCategory"
  | "deleteComment"
  | "deleteGfDraftEntry"
  | "deleteGfEntry"
  | "deleteMediaItem"
  | "deletePage"
  | "deletePost"
  | "deletePostFormat"
  | "deleteTag"
  | "deleteUser"
  | "increaseCount"
  | "login"
  | "refreshJwtAuthToken"
  | "registerUser"
  | "resetUserPassword"
  | "restoreComment"
  | "sendPasswordResetEmail"
  | "submitGfDraftEntry"
  | "submitGfForm"
  | "updateCategory"
  | "updateComment"
  | "updateGfDraftEntry"
  | "updateGfEntry"
  | "updateMediaItem"
  | "updatePage"
  | "updatePost"
  | "updatePostFormat"
  | "updateSettings"
  | "updateTag"
  | "updateUser"
  | RootMutationKeySpecifier
)[];
export type RootMutationFieldPolicy = {
  createCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  createComment?: FieldPolicy<any> | FieldReadFunction<any>;
  createMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
  createPage?: FieldPolicy<any> | FieldReadFunction<any>;
  createPost?: FieldPolicy<any> | FieldReadFunction<any>;
  createPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  createTag?: FieldPolicy<any> | FieldReadFunction<any>;
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteComment?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteGfDraftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteGfEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePage?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePost?: FieldPolicy<any> | FieldReadFunction<any>;
  deletePostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteTag?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUser?: FieldPolicy<any> | FieldReadFunction<any>;
  increaseCount?: FieldPolicy<any> | FieldReadFunction<any>;
  login?: FieldPolicy<any> | FieldReadFunction<any>;
  refreshJwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>;
  registerUser?: FieldPolicy<any> | FieldReadFunction<any>;
  resetUserPassword?: FieldPolicy<any> | FieldReadFunction<any>;
  restoreComment?: FieldPolicy<any> | FieldReadFunction<any>;
  sendPasswordResetEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  submitGfDraftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  submitGfForm?: FieldPolicy<any> | FieldReadFunction<any>;
  updateCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  updateComment?: FieldPolicy<any> | FieldReadFunction<any>;
  updateGfDraftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  updateGfEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  updateMediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePage?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePost?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  updateSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  updateTag?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryKeySpecifier = (
  | "allSettings"
  | "categories"
  | "category"
  | "comment"
  | "comments"
  | "contentNode"
  | "contentNodes"
  | "contentType"
  | "contentTypes"
  | "discussionSettings"
  | "generalSettings"
  | "genesisBlocksAnalyticsSettingsSettings"
  | "genesisBlocksGlobalSettingsSettings"
  | "gfDraftEntry"
  | "gfEntries"
  | "gfEntry"
  | "gfForm"
  | "gfForms"
  | "gfSettings"
  | "gfSubmittedEntries"
  | "gfSubmittedEntry"
  | "mediaItem"
  | "mediaItemBy"
  | "mediaItems"
  | "menu"
  | "menuItem"
  | "menuItems"
  | "menus"
  | "node"
  | "nodeByUri"
  | "page"
  | "pageBy"
  | "pages"
  | "plugin"
  | "plugins"
  | "post"
  | "postBy"
  | "postFormat"
  | "postFormats"
  | "posts"
  | "readingSettings"
  | "registeredScripts"
  | "registeredStylesheets"
  | "revisions"
  | "seo"
  | "tag"
  | "tags"
  | "taxonomies"
  | "taxonomy"
  | "termNode"
  | "terms"
  | "theme"
  | "themes"
  | "user"
  | "userRole"
  | "userRoles"
  | "users"
  | "viewer"
  | "writingSettings"
  | RootQueryKeySpecifier
)[];
export type RootQueryFieldPolicy = {
  allSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  categories?: FieldPolicy<any> | FieldReadFunction<any>;
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  contentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
  contentType?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  genesisBlocksAnalyticsSettingsSettings?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  genesisBlocksGlobalSettingsSettings?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  gfDraftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  gfEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  gfEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  gfForm?: FieldPolicy<any> | FieldReadFunction<any>;
  gfForms?: FieldPolicy<any> | FieldReadFunction<any>;
  gfSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  gfSubmittedEntries?: FieldPolicy<any> | FieldReadFunction<any>;
  gfSubmittedEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItemBy?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItems?: FieldPolicy<any> | FieldReadFunction<any>;
  menu?: FieldPolicy<any> | FieldReadFunction<any>;
  menuItem?: FieldPolicy<any> | FieldReadFunction<any>;
  menuItems?: FieldPolicy<any> | FieldReadFunction<any>;
  menus?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
  nodeByUri?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  pageBy?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  plugin?: FieldPolicy<any> | FieldReadFunction<any>;
  plugins?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
  postBy?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormats?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  readingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  registeredScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  registeredStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  revisions?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
  tags?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomies?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
  termNode?: FieldPolicy<any> | FieldReadFunction<any>;
  terms?: FieldPolicy<any> | FieldReadFunction<any>;
  theme?: FieldPolicy<any> | FieldReadFunction<any>;
  themes?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  userRole?: FieldPolicy<any> | FieldReadFunction<any>;
  userRoles?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
  viewer?: FieldPolicy<any> | FieldReadFunction<any>;
  writingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCategoryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToCategoryConnectionKeySpecifier
)[];
export type RootQueryToCategoryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCategoryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToCategoryConnectionEdgeKeySpecifier
)[];
export type RootQueryToCategoryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToCommentConnectionKeySpecifier
)[];
export type RootQueryToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToCommentConnectionEdgeKeySpecifier
)[];
export type RootQueryToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToContentNodeConnectionKeySpecifier
)[];
export type RootQueryToContentNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToContentNodeConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentRevisionUnionConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToContentRevisionUnionConnectionKeySpecifier
)[];
export type RootQueryToContentRevisionUnionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentRevisionUnionConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentTypeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToContentTypeConnectionKeySpecifier
)[];
export type RootQueryToContentTypeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToContentTypeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToContentTypeConnectionEdgeKeySpecifier
)[];
export type RootQueryToContentTypeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedScriptConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToEnqueuedScriptConnectionKeySpecifier
)[];
export type RootQueryToEnqueuedScriptConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedStylesheetConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type RootQueryToEnqueuedStylesheetConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfEntryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToGfEntryConnectionKeySpecifier
)[];
export type RootQueryToGfEntryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfEntryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToGfEntryConnectionEdgeKeySpecifier
)[];
export type RootQueryToGfEntryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfFormConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToGfFormConnectionKeySpecifier
)[];
export type RootQueryToGfFormConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfFormConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToGfFormConnectionEdgeKeySpecifier
)[];
export type RootQueryToGfFormConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfSubmittedEntryConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToGfSubmittedEntryConnectionKeySpecifier
)[];
export type RootQueryToGfSubmittedEntryConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToGfSubmittedEntryConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToGfSubmittedEntryConnectionEdgeKeySpecifier
)[];
export type RootQueryToGfSubmittedEntryConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMediaItemConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToMediaItemConnectionKeySpecifier
)[];
export type RootQueryToMediaItemConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMediaItemConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToMediaItemConnectionEdgeKeySpecifier
)[];
export type RootQueryToMediaItemConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToMenuConnectionKeySpecifier
)[];
export type RootQueryToMenuConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToMenuConnectionEdgeKeySpecifier
)[];
export type RootQueryToMenuConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuItemConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToMenuItemConnectionKeySpecifier
)[];
export type RootQueryToMenuItemConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToMenuItemConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToMenuItemConnectionEdgeKeySpecifier
)[];
export type RootQueryToMenuItemConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPageConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToPageConnectionKeySpecifier
)[];
export type RootQueryToPageConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPageConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToPageConnectionEdgeKeySpecifier
)[];
export type RootQueryToPageConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPluginConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToPluginConnectionKeySpecifier
)[];
export type RootQueryToPluginConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPluginConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToPluginConnectionEdgeKeySpecifier
)[];
export type RootQueryToPluginConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToPostConnectionKeySpecifier
)[];
export type RootQueryToPostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToPostConnectionEdgeKeySpecifier
)[];
export type RootQueryToPostConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostFormatConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToPostFormatConnectionKeySpecifier
)[];
export type RootQueryToPostFormatConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToPostFormatConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToPostFormatConnectionEdgeKeySpecifier
)[];
export type RootQueryToPostFormatConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTagConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToTagConnectionKeySpecifier
)[];
export type RootQueryToTagConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTagConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToTagConnectionEdgeKeySpecifier
)[];
export type RootQueryToTagConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTaxonomyConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToTaxonomyConnectionKeySpecifier
)[];
export type RootQueryToTaxonomyConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTaxonomyConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToTaxonomyConnectionEdgeKeySpecifier
)[];
export type RootQueryToTaxonomyConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTermNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToTermNodeConnectionKeySpecifier
)[];
export type RootQueryToTermNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToTermNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToTermNodeConnectionEdgeKeySpecifier
)[];
export type RootQueryToTermNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToThemeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToThemeConnectionKeySpecifier
)[];
export type RootQueryToThemeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToThemeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToThemeConnectionEdgeKeySpecifier
)[];
export type RootQueryToThemeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToUserConnectionKeySpecifier
)[];
export type RootQueryToUserConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToUserConnectionEdgeKeySpecifier
)[];
export type RootQueryToUserConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserRoleConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | RootQueryToUserRoleConnectionKeySpecifier
)[];
export type RootQueryToUserRoleConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type RootQueryToUserRoleConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | RootQueryToUserRoleConnectionEdgeKeySpecifier
)[];
export type RootQueryToUserRoleConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOBreadcrumbsKeySpecifier = (
  | "archivePrefix"
  | "boldLast"
  | "enabled"
  | "homeText"
  | "notFoundText"
  | "prefix"
  | "searchPrefix"
  | "separator"
  | "showBlogPage"
  | SEOBreadcrumbsKeySpecifier
)[];
export type SEOBreadcrumbsFieldPolicy = {
  archivePrefix?: FieldPolicy<any> | FieldReadFunction<any>;
  boldLast?: FieldPolicy<any> | FieldReadFunction<any>;
  enabled?: FieldPolicy<any> | FieldReadFunction<any>;
  homeText?: FieldPolicy<any> | FieldReadFunction<any>;
  notFoundText?: FieldPolicy<any> | FieldReadFunction<any>;
  prefix?: FieldPolicy<any> | FieldReadFunction<any>;
  searchPrefix?: FieldPolicy<any> | FieldReadFunction<any>;
  separator?: FieldPolicy<any> | FieldReadFunction<any>;
  showBlogPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOConfigKeySpecifier = (
  | "breadcrumbs"
  | "contentTypes"
  | "openGraph"
  | "redirects"
  | "schema"
  | "social"
  | "webmaster"
  | SEOConfigKeySpecifier
)[];
export type SEOConfigFieldPolicy = {
  breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
  contentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  openGraph?: FieldPolicy<any> | FieldReadFunction<any>;
  redirects?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  social?: FieldPolicy<any> | FieldReadFunction<any>;
  webmaster?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOContentTypeKeySpecifier = (
  | "archive"
  | "metaDesc"
  | "metaRobotsNoindex"
  | "schema"
  | "schemaType"
  | "title"
  | SEOContentTypeKeySpecifier
)[];
export type SEOContentTypeFieldPolicy = {
  archive?: FieldPolicy<any> | FieldReadFunction<any>;
  metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  schemaType?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOContentTypeArchiveKeySpecifier = (
  | "archiveLink"
  | "breadcrumbTitle"
  | "fullHead"
  | "hasArchive"
  | "metaDesc"
  | "metaRobotsNoindex"
  | "title"
  | SEOContentTypeArchiveKeySpecifier
)[];
export type SEOContentTypeArchiveFieldPolicy = {
  archiveLink?: FieldPolicy<any> | FieldReadFunction<any>;
  breadcrumbTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  fullHead?: FieldPolicy<any> | FieldReadFunction<any>;
  hasArchive?: FieldPolicy<any> | FieldReadFunction<any>;
  metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOContentTypesKeySpecifier = (
  | "mediaItem"
  | "page"
  | "post"
  | SEOContentTypesKeySpecifier
)[];
export type SEOContentTypesFieldPolicy = {
  mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOOpenGraphKeySpecifier = (
  | "defaultImage"
  | "frontPage"
  | SEOOpenGraphKeySpecifier
)[];
export type SEOOpenGraphFieldPolicy = {
  defaultImage?: FieldPolicy<any> | FieldReadFunction<any>;
  frontPage?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOOpenGraphFrontPageKeySpecifier = (
  | "description"
  | "image"
  | "title"
  | SEOOpenGraphFrontPageKeySpecifier
)[];
export type SEOOpenGraphFrontPageFieldPolicy = {
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPageInfoSchemaKeySpecifier = (
  | "raw"
  | SEOPageInfoSchemaKeySpecifier
)[];
export type SEOPageInfoSchemaFieldPolicy = {
  raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypeBreadcrumbsKeySpecifier = (
  | "text"
  | "url"
  | SEOPostTypeBreadcrumbsKeySpecifier
)[];
export type SEOPostTypeBreadcrumbsFieldPolicy = {
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypePageInfoKeySpecifier = (
  | "schema"
  | SEOPostTypePageInfoKeySpecifier
)[];
export type SEOPostTypePageInfoFieldPolicy = {
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOPostTypeSchemaKeySpecifier = (
  | "articleType"
  | "pageType"
  | "raw"
  | SEOPostTypeSchemaKeySpecifier
)[];
export type SEOPostTypeSchemaFieldPolicy = {
  articleType?: FieldPolicy<any> | FieldReadFunction<any>;
  pageType?: FieldPolicy<any> | FieldReadFunction<any>;
  raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEORedirectKeySpecifier = (
  | "format"
  | "origin"
  | "target"
  | "type"
  | SEORedirectKeySpecifier
)[];
export type SEORedirectFieldPolicy = {
  format?: FieldPolicy<any> | FieldReadFunction<any>;
  origin?: FieldPolicy<any> | FieldReadFunction<any>;
  target?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSchemaKeySpecifier = (
  | "companyLogo"
  | "companyName"
  | "companyOrPerson"
  | "homeUrl"
  | "inLanguage"
  | "logo"
  | "personLogo"
  | "personName"
  | "siteName"
  | "siteUrl"
  | "wordpressSiteName"
  | SEOSchemaKeySpecifier
)[];
export type SEOSchemaFieldPolicy = {
  companyLogo?: FieldPolicy<any> | FieldReadFunction<any>;
  companyName?: FieldPolicy<any> | FieldReadFunction<any>;
  companyOrPerson?: FieldPolicy<any> | FieldReadFunction<any>;
  homeUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  inLanguage?: FieldPolicy<any> | FieldReadFunction<any>;
  logo?: FieldPolicy<any> | FieldReadFunction<any>;
  personLogo?: FieldPolicy<any> | FieldReadFunction<any>;
  personName?: FieldPolicy<any> | FieldReadFunction<any>;
  siteName?: FieldPolicy<any> | FieldReadFunction<any>;
  siteUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  wordpressSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialKeySpecifier = (
  | "facebook"
  | "instagram"
  | "linkedIn"
  | "mySpace"
  | "pinterest"
  | "twitter"
  | "wikipedia"
  | "youTube"
  | SEOSocialKeySpecifier
)[];
export type SEOSocialFieldPolicy = {
  facebook?: FieldPolicy<any> | FieldReadFunction<any>;
  instagram?: FieldPolicy<any> | FieldReadFunction<any>;
  linkedIn?: FieldPolicy<any> | FieldReadFunction<any>;
  mySpace?: FieldPolicy<any> | FieldReadFunction<any>;
  pinterest?: FieldPolicy<any> | FieldReadFunction<any>;
  twitter?: FieldPolicy<any> | FieldReadFunction<any>;
  wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
  youTube?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialFacebookKeySpecifier = (
  | "defaultImage"
  | "url"
  | SEOSocialFacebookKeySpecifier
)[];
export type SEOSocialFacebookFieldPolicy = {
  defaultImage?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialInstagramKeySpecifier = (
  | "url"
  | SEOSocialInstagramKeySpecifier
)[];
export type SEOSocialInstagramFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialLinkedInKeySpecifier = (
  | "url"
  | SEOSocialLinkedInKeySpecifier
)[];
export type SEOSocialLinkedInFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialMySpaceKeySpecifier = (
  | "url"
  | SEOSocialMySpaceKeySpecifier
)[];
export type SEOSocialMySpaceFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialPinterestKeySpecifier = (
  | "metaTag"
  | "url"
  | SEOSocialPinterestKeySpecifier
)[];
export type SEOSocialPinterestFieldPolicy = {
  metaTag?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialTwitterKeySpecifier = (
  | "cardType"
  | "username"
  | SEOSocialTwitterKeySpecifier
)[];
export type SEOSocialTwitterFieldPolicy = {
  cardType?: FieldPolicy<any> | FieldReadFunction<any>;
  username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialWikipediaKeySpecifier = (
  | "url"
  | SEOSocialWikipediaKeySpecifier
)[];
export type SEOSocialWikipediaFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOSocialYoutubeKeySpecifier = (
  | "url"
  | SEOSocialYoutubeKeySpecifier
)[];
export type SEOSocialYoutubeFieldPolicy = {
  url?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOTaxonomySchemaKeySpecifier = (
  | "raw"
  | SEOTaxonomySchemaKeySpecifier
)[];
export type SEOTaxonomySchemaFieldPolicy = {
  raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserKeySpecifier = (
  | "breadcrumbTitle"
  | "canonical"
  | "fullHead"
  | "language"
  | "metaDesc"
  | "metaRobotsNofollow"
  | "metaRobotsNoindex"
  | "opengraphDescription"
  | "opengraphImage"
  | "opengraphTitle"
  | "region"
  | "schema"
  | "social"
  | "title"
  | "twitterDescription"
  | "twitterImage"
  | "twitterTitle"
  | SEOUserKeySpecifier
)[];
export type SEOUserFieldPolicy = {
  breadcrumbTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  canonical?: FieldPolicy<any> | FieldReadFunction<any>;
  fullHead?: FieldPolicy<any> | FieldReadFunction<any>;
  language?: FieldPolicy<any> | FieldReadFunction<any>;
  metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  region?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  social?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterImage?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserSchemaKeySpecifier = (
  | "articleType"
  | "pageType"
  | "raw"
  | SEOUserSchemaKeySpecifier
)[];
export type SEOUserSchemaFieldPolicy = {
  articleType?: FieldPolicy<any> | FieldReadFunction<any>;
  pageType?: FieldPolicy<any> | FieldReadFunction<any>;
  raw?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOUserSocialKeySpecifier = (
  | "facebook"
  | "instagram"
  | "linkedIn"
  | "mySpace"
  | "pinterest"
  | "soundCloud"
  | "twitter"
  | "wikipedia"
  | "youTube"
  | SEOUserSocialKeySpecifier
)[];
export type SEOUserSocialFieldPolicy = {
  facebook?: FieldPolicy<any> | FieldReadFunction<any>;
  instagram?: FieldPolicy<any> | FieldReadFunction<any>;
  linkedIn?: FieldPolicy<any> | FieldReadFunction<any>;
  mySpace?: FieldPolicy<any> | FieldReadFunction<any>;
  pinterest?: FieldPolicy<any> | FieldReadFunction<any>;
  soundCloud?: FieldPolicy<any> | FieldReadFunction<any>;
  twitter?: FieldPolicy<any> | FieldReadFunction<any>;
  wikipedia?: FieldPolicy<any> | FieldReadFunction<any>;
  youTube?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SEOWebmasterKeySpecifier = (
  | "baiduVerify"
  | "googleVerify"
  | "msVerify"
  | "yandexVerify"
  | SEOWebmasterKeySpecifier
)[];
export type SEOWebmasterFieldPolicy = {
  baiduVerify?: FieldPolicy<any> | FieldReadFunction<any>;
  googleVerify?: FieldPolicy<any> | FieldReadFunction<any>;
  msVerify?: FieldPolicy<any> | FieldReadFunction<any>;
  yandexVerify?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SectionFieldKeySpecifier = (
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "displayOnly"
  | "id"
  | "inputType"
  | "label"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "type"
  | "visibility"
  | SectionFieldKeySpecifier
)[];
export type SectionFieldFieldPolicy = {
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SelectFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "choices"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasChoiceValue"
  | "hasEnhancedUI"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | SelectFieldKeySpecifier
)[];
export type SelectFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  choices?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasChoiceValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hasEnhancedUI?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SelectFieldChoiceKeySpecifier = (
  | "isSelected"
  | "text"
  | "value"
  | SelectFieldChoiceKeySpecifier
)[];
export type SelectFieldChoiceFieldPolicy = {
  isSelected?: FieldPolicy<any> | FieldReadFunction<any>;
  text?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SendPasswordResetEmailPayloadKeySpecifier = (
  | "clientMutationId"
  | "user"
  | SendPasswordResetEmailPayloadKeySpecifier
)[];
export type SendPasswordResetEmailPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SettingsKeySpecifier = (
  | "discussionSettingsDefaultCommentStatus"
  | "discussionSettingsDefaultPingStatus"
  | "generalSettingsDateFormat"
  | "generalSettingsDescription"
  | "generalSettingsEmail"
  | "generalSettingsLanguage"
  | "generalSettingsStartOfWeek"
  | "generalSettingsTimeFormat"
  | "generalSettingsTimezone"
  | "generalSettingsTitle"
  | "generalSettingsUrl"
  | "genesisBlocksAnalyticsSettingsSettingsGenesisBlocksAnalyticsOptIn"
  | "genesisBlocksGlobalSettingsSettingsGenesisBlocksMailchimpApiKey"
  | "readingSettingsPostsPerPage"
  | "writingSettingsDefaultCategory"
  | "writingSettingsDefaultPostFormat"
  | "writingSettingsUseSmilies"
  | SettingsKeySpecifier
)[];
export type SettingsFieldPolicy = {
  discussionSettingsDefaultCommentStatus?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  discussionSettingsDefaultPingStatus?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  generalSettingsDateFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsLanguage?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsStartOfWeek?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsTimeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsTimezone?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettingsUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  genesisBlocksAnalyticsSettingsSettingsGenesisBlocksAnalyticsOptIn?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  genesisBlocksGlobalSettingsSettingsGenesisBlocksMailchimpApiKey?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  readingSettingsPostsPerPage?: FieldPolicy<any> | FieldReadFunction<any>;
  writingSettingsDefaultCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  writingSettingsDefaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  writingSettingsUseSmilies?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubmitGfDraftEntryPayloadKeySpecifier = (
  | "clientMutationId"
  | "entry"
  | "errors"
  | SubmitGfDraftEntryPayloadKeySpecifier
)[];
export type SubmitGfDraftEntryPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  entry?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SubmitGfFormPayloadKeySpecifier = (
  | "clientMutationId"
  | "entry"
  | "errors"
  | "resumeUrl"
  | SubmitGfFormPayloadKeySpecifier
)[];
export type SubmitGfFormPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  entry?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  resumeUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type SurveyFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "type"
  | "value"
  | "visibility"
  | SurveyFieldKeySpecifier
)[];
export type SurveyFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagKeySpecifier = (
  | "contentNodes"
  | "count"
  | "databaseId"
  | "description"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "id"
  | "isContentNode"
  | "isRestricted"
  | "isTermNode"
  | "link"
  | "name"
  | "posts"
  | "seo"
  | "slug"
  | "tagId"
  | "taxonomy"
  | "taxonomyName"
  | "termGroupId"
  | "termTaxonomyId"
  | "uri"
  | TagKeySpecifier
)[];
export type TagFieldPolicy = {
  contentNodes?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  tagId?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomy?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>;
  termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
  termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToContentNodeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | TagToContentNodeConnectionKeySpecifier
)[];
export type TagToContentNodeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToContentNodeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | TagToContentNodeConnectionEdgeKeySpecifier
)[];
export type TagToContentNodeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToPostConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | TagToPostConnectionKeySpecifier
)[];
export type TagToPostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToPostConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | TagToPostConnectionEdgeKeySpecifier
)[];
export type TagToPostConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TagToTaxonomyConnectionEdgeKeySpecifier = (
  | "node"
  | TagToTaxonomyConnectionEdgeKeySpecifier
)[];
export type TagToTaxonomyConnectionEdgeFieldPolicy = {
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyKeySpecifier = (
  | "connectedContentTypes"
  | "description"
  | "graphqlPluralName"
  | "graphqlSingleName"
  | "hierarchical"
  | "id"
  | "isRestricted"
  | "label"
  | "name"
  | "public"
  | "restBase"
  | "restControllerClass"
  | "showCloud"
  | "showInAdminColumn"
  | "showInGraphql"
  | "showInMenu"
  | "showInNavMenus"
  | "showInQuickEdit"
  | "showInRest"
  | "showUi"
  | TaxonomyKeySpecifier
)[];
export type TaxonomyFieldPolicy = {
  connectedContentTypes?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>;
  graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>;
  hierarchical?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  public?: FieldPolicy<any> | FieldReadFunction<any>;
  restBase?: FieldPolicy<any> | FieldReadFunction<any>;
  restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>;
  showCloud?: FieldPolicy<any> | FieldReadFunction<any>;
  showInAdminColumn?: FieldPolicy<any> | FieldReadFunction<any>;
  showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>;
  showInMenu?: FieldPolicy<any> | FieldReadFunction<any>;
  showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>;
  showInQuickEdit?: FieldPolicy<any> | FieldReadFunction<any>;
  showInRest?: FieldPolicy<any> | FieldReadFunction<any>;
  showUi?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomySEOKeySpecifier = (
  | "breadcrumbs"
  | "canonical"
  | "cornerstone"
  | "focuskw"
  | "fullHead"
  | "metaDesc"
  | "metaKeywords"
  | "metaRobotsNofollow"
  | "metaRobotsNoindex"
  | "opengraphAuthor"
  | "opengraphDescription"
  | "opengraphImage"
  | "opengraphModifiedTime"
  | "opengraphPublishedTime"
  | "opengraphPublisher"
  | "opengraphSiteName"
  | "opengraphTitle"
  | "opengraphType"
  | "opengraphUrl"
  | "schema"
  | "title"
  | "twitterDescription"
  | "twitterImage"
  | "twitterTitle"
  | TaxonomySEOKeySpecifier
)[];
export type TaxonomySEOFieldPolicy = {
  breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>;
  canonical?: FieldPolicy<any> | FieldReadFunction<any>;
  cornerstone?: FieldPolicy<any> | FieldReadFunction<any>;
  focuskw?: FieldPolicy<any> | FieldReadFunction<any>;
  fullHead?: FieldPolicy<any> | FieldReadFunction<any>;
  metaDesc?: FieldPolicy<any> | FieldReadFunction<any>;
  metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>;
  metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphType?: FieldPolicy<any> | FieldReadFunction<any>;
  opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>;
  schema?: FieldPolicy<any> | FieldReadFunction<any>;
  title?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterImage?: FieldPolicy<any> | FieldReadFunction<any>;
  twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyToContentTypeConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | TaxonomyToContentTypeConnectionKeySpecifier
)[];
export type TaxonomyToContentTypeConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TaxonomyToContentTypeConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | TaxonomyToContentTypeConnectionEdgeKeySpecifier
)[];
export type TaxonomyToContentTypeConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type Template_FullWidthKeySpecifier = (
  | "templateName"
  | Template_FullWidthKeySpecifier
)[];
export type Template_FullWidthFieldPolicy = {
  templateName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeKeySpecifier = (
  | "count"
  | "databaseId"
  | "description"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "id"
  | "isContentNode"
  | "isRestricted"
  | "isTermNode"
  | "link"
  | "name"
  | "slug"
  | "taxonomyName"
  | "termGroupId"
  | "termTaxonomyId"
  | "uri"
  | TermNodeKeySpecifier
)[];
export type TermNodeFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  link?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>;
  termGroupId?: FieldPolicy<any> | FieldReadFunction<any>;
  termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedScriptConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | TermNodeToEnqueuedScriptConnectionKeySpecifier
)[];
export type TermNodeToEnqueuedScriptConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedStylesheetConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | TermNodeToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type TermNodeToEnqueuedStylesheetConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TextAreaFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasRichTextEditor"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | TextAreaFieldKeySpecifier
)[];
export type TextAreaFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasRichTextEditor?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TextFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasInputMask"
  | "id"
  | "inputMaskValue"
  | "inputName"
  | "inputType"
  | "isPasswordInput"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | TextFieldKeySpecifier
)[];
export type TextFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasInputMask?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputMaskValue?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isPasswordInput?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ThemeKeySpecifier = (
  | "author"
  | "authorUri"
  | "description"
  | "id"
  | "isRestricted"
  | "name"
  | "screenshot"
  | "slug"
  | "tags"
  | "themeUri"
  | "version"
  | ThemeKeySpecifier
)[];
export type ThemeFieldPolicy = {
  author?: FieldPolicy<any> | FieldReadFunction<any>;
  authorUri?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  screenshot?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  tags?: FieldPolicy<any> | FieldReadFunction<any>;
  themeUri?: FieldPolicy<any> | FieldReadFunction<any>;
  version?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TimeFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputType"
  | "inputs"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "shouldAllowDuplicates"
  | "subLabelPlacement"
  | "timeFormat"
  | "timeValues"
  | "type"
  | "value"
  | "visibility"
  | TimeFieldKeySpecifier
)[];
export type TimeFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  inputs?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  subLabelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  timeFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  timeValues?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TimeFieldValueKeySpecifier = (
  | "amPm"
  | "displayValue"
  | "hours"
  | "minutes"
  | TimeFieldValueKeySpecifier
)[];
export type TimeFieldValueFieldPolicy = {
  amPm?: FieldPolicy<any> | FieldReadFunction<any>;
  displayValue?: FieldPolicy<any> | FieldReadFunction<any>;
  hours?: FieldPolicy<any> | FieldReadFunction<any>;
  minutes?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TimeInputPropertyKeySpecifier = (
  | "autocompleteAttribute"
  | "customLabel"
  | "defaultValue"
  | "id"
  | "label"
  | "placeholder"
  | TimeInputPropertyKeySpecifier
)[];
export type TimeInputPropertyFieldPolicy = {
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  customLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UniformResourceIdentifiableKeySpecifier = (
  | "id"
  | "isContentNode"
  | "isTermNode"
  | "uri"
  | UniformResourceIdentifiableKeySpecifier
)[];
export type UniformResourceIdentifiableFieldPolicy = {
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCategoryPayloadKeySpecifier = (
  | "category"
  | "clientMutationId"
  | UpdateCategoryPayloadKeySpecifier
)[];
export type UpdateCategoryPayloadFieldPolicy = {
  category?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateCommentPayloadKeySpecifier = (
  | "clientMutationId"
  | "comment"
  | "success"
  | UpdateCommentPayloadKeySpecifier
)[];
export type UpdateCommentPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  comment?: FieldPolicy<any> | FieldReadFunction<any>;
  success?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateGfDraftEntryPayloadKeySpecifier = (
  | "clientMutationId"
  | "draftEntry"
  | "errors"
  | "resumeUrl"
  | UpdateGfDraftEntryPayloadKeySpecifier
)[];
export type UpdateGfDraftEntryPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  draftEntry?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
  resumeUrl?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateGfEntryPayloadKeySpecifier = (
  | "clientMutationId"
  | "entry"
  | "errors"
  | UpdateGfEntryPayloadKeySpecifier
)[];
export type UpdateGfEntryPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  entry?: FieldPolicy<any> | FieldReadFunction<any>;
  errors?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateMediaItemPayloadKeySpecifier = (
  | "clientMutationId"
  | "mediaItem"
  | UpdateMediaItemPayloadKeySpecifier
)[];
export type UpdateMediaItemPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItem?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePagePayloadKeySpecifier = (
  | "clientMutationId"
  | "page"
  | UpdatePagePayloadKeySpecifier
)[];
export type UpdatePagePayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  page?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePostFormatPayloadKeySpecifier = (
  | "clientMutationId"
  | "postFormat"
  | UpdatePostFormatPayloadKeySpecifier
)[];
export type UpdatePostFormatPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  postFormat?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdatePostPayloadKeySpecifier = (
  | "clientMutationId"
  | "post"
  | UpdatePostPayloadKeySpecifier
)[];
export type UpdatePostPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  post?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateSettingsPayloadKeySpecifier = (
  | "allSettings"
  | "clientMutationId"
  | "discussionSettings"
  | "generalSettings"
  | "genesisBlocksAnalyticsSettingsSettings"
  | "genesisBlocksGlobalSettingsSettings"
  | "readingSettings"
  | "writingSettings"
  | UpdateSettingsPayloadKeySpecifier
)[];
export type UpdateSettingsPayloadFieldPolicy = {
  allSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  generalSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  genesisBlocksAnalyticsSettingsSettings?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  genesisBlocksGlobalSettingsSettings?:
    | FieldPolicy<any>
    | FieldReadFunction<any>;
  readingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
  writingSettings?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateTagPayloadKeySpecifier = (
  | "clientMutationId"
  | "tag"
  | UpdateTagPayloadKeySpecifier
)[];
export type UpdateTagPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  tag?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateUserPayloadKeySpecifier = (
  | "clientMutationId"
  | "user"
  | UpdateUserPayloadKeySpecifier
)[];
export type UpdateUserPayloadFieldPolicy = {
  clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>;
  user?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | "avatar"
  | "capKey"
  | "capabilities"
  | "comments"
  | "databaseId"
  | "description"
  | "email"
  | "enqueuedScripts"
  | "enqueuedStylesheets"
  | "extraCapabilities"
  | "firstName"
  | "id"
  | "isContentNode"
  | "isJwtAuthSecretRevoked"
  | "isRestricted"
  | "isTermNode"
  | "jwtAuthExpiration"
  | "jwtAuthToken"
  | "jwtRefreshToken"
  | "jwtUserSecret"
  | "lastName"
  | "locale"
  | "mediaItems"
  | "name"
  | "nicename"
  | "nickname"
  | "pages"
  | "posts"
  | "registeredDate"
  | "revisions"
  | "roles"
  | "seo"
  | "slug"
  | "uri"
  | "url"
  | "userId"
  | "username"
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  avatar?: FieldPolicy<any> | FieldReadFunction<any>;
  capKey?: FieldPolicy<any> | FieldReadFunction<any>;
  capabilities?: FieldPolicy<any> | FieldReadFunction<any>;
  comments?: FieldPolicy<any> | FieldReadFunction<any>;
  databaseId?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>;
  enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>;
  extraCapabilities?: FieldPolicy<any> | FieldReadFunction<any>;
  firstName?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isContentNode?: FieldPolicy<any> | FieldReadFunction<any>;
  isJwtAuthSecretRevoked?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  isTermNode?: FieldPolicy<any> | FieldReadFunction<any>;
  jwtAuthExpiration?: FieldPolicy<any> | FieldReadFunction<any>;
  jwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>;
  jwtRefreshToken?: FieldPolicy<any> | FieldReadFunction<any>;
  jwtUserSecret?: FieldPolicy<any> | FieldReadFunction<any>;
  lastName?: FieldPolicy<any> | FieldReadFunction<any>;
  locale?: FieldPolicy<any> | FieldReadFunction<any>;
  mediaItems?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  nicename?: FieldPolicy<any> | FieldReadFunction<any>;
  nickname?: FieldPolicy<any> | FieldReadFunction<any>;
  pages?: FieldPolicy<any> | FieldReadFunction<any>;
  posts?: FieldPolicy<any> | FieldReadFunction<any>;
  registeredDate?: FieldPolicy<any> | FieldReadFunction<any>;
  revisions?: FieldPolicy<any> | FieldReadFunction<any>;
  roles?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
  uri?: FieldPolicy<any> | FieldReadFunction<any>;
  url?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
  username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserRoleKeySpecifier = (
  | "capabilities"
  | "displayName"
  | "id"
  | "isRestricted"
  | "name"
  | UserRoleKeySpecifier
)[];
export type UserRoleFieldPolicy = {
  capabilities?: FieldPolicy<any> | FieldReadFunction<any>;
  displayName?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  isRestricted?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToCommentConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToCommentConnectionKeySpecifier
)[];
export type UserToCommentConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToCommentConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToCommentConnectionEdgeKeySpecifier
)[];
export type UserToCommentConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToContentRevisionUnionConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToContentRevisionUnionConnectionKeySpecifier
)[];
export type UserToContentRevisionUnionConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToContentRevisionUnionConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToContentRevisionUnionConnectionEdgeKeySpecifier
)[];
export type UserToContentRevisionUnionConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedScriptConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToEnqueuedScriptConnectionKeySpecifier
)[];
export type UserToEnqueuedScriptConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedScriptConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToEnqueuedScriptConnectionEdgeKeySpecifier
)[];
export type UserToEnqueuedScriptConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedStylesheetConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToEnqueuedStylesheetConnectionKeySpecifier
)[];
export type UserToEnqueuedStylesheetConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToEnqueuedStylesheetConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier
)[];
export type UserToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToMediaItemConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToMediaItemConnectionKeySpecifier
)[];
export type UserToMediaItemConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToMediaItemConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToMediaItemConnectionEdgeKeySpecifier
)[];
export type UserToMediaItemConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPageConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToPageConnectionKeySpecifier
)[];
export type UserToPageConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPageConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToPageConnectionEdgeKeySpecifier
)[];
export type UserToPageConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPostConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToPostConnectionKeySpecifier
)[];
export type UserToPostConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToPostConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToPostConnectionEdgeKeySpecifier
)[];
export type UserToPostConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToUserRoleConnectionKeySpecifier = (
  | "edges"
  | "nodes"
  | "pageInfo"
  | UserToUserRoleConnectionKeySpecifier
)[];
export type UserToUserRoleConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  nodes?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserToUserRoleConnectionEdgeKeySpecifier = (
  | "cursor"
  | "node"
  | UserToUserRoleConnectionEdgeKeySpecifier
)[];
export type UserToUserRoleConnectionEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UsernameFieldKeySpecifier = (
  | "adminLabel"
  | "autocompleteAttribute"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "hasAutocomplete"
  | "hasInputMask"
  | "id"
  | "inputMaskValue"
  | "inputName"
  | "inputType"
  | "isPasswordInput"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "maxLength"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | UsernameFieldKeySpecifier
)[];
export type UsernameFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  autocompleteAttribute?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasAutocomplete?: FieldPolicy<any> | FieldReadFunction<any>;
  hasInputMask?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputMaskValue?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isPasswordInput?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  maxLength?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WPPageInfoKeySpecifier = (
  | "endCursor"
  | "hasNextPage"
  | "hasPreviousPage"
  | "seo"
  | "startCursor"
  | "total"
  | WPPageInfoKeySpecifier
)[];
export type WPPageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  seo?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  total?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WebsiteFieldKeySpecifier = (
  | "adminLabel"
  | "canPrepopulate"
  | "conditionalLogic"
  | "cssClass"
  | "defaultValue"
  | "description"
  | "descriptionPlacement"
  | "displayOnly"
  | "errorMessage"
  | "id"
  | "inputName"
  | "inputType"
  | "isRequired"
  | "label"
  | "labelPlacement"
  | "layoutGridColumnSpan"
  | "layoutSpacerGridColumnSpan"
  | "pageNumber"
  | "personalData"
  | "placeholder"
  | "shouldAllowDuplicates"
  | "size"
  | "type"
  | "value"
  | "visibility"
  | WebsiteFieldKeySpecifier
)[];
export type WebsiteFieldFieldPolicy = {
  adminLabel?: FieldPolicy<any> | FieldReadFunction<any>;
  canPrepopulate?: FieldPolicy<any> | FieldReadFunction<any>;
  conditionalLogic?: FieldPolicy<any> | FieldReadFunction<any>;
  cssClass?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultValue?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  descriptionPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  displayOnly?: FieldPolicy<any> | FieldReadFunction<any>;
  errorMessage?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  inputName?: FieldPolicy<any> | FieldReadFunction<any>;
  inputType?: FieldPolicy<any> | FieldReadFunction<any>;
  isRequired?: FieldPolicy<any> | FieldReadFunction<any>;
  label?: FieldPolicy<any> | FieldReadFunction<any>;
  labelPlacement?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  layoutSpacerGridColumnSpan?: FieldPolicy<any> | FieldReadFunction<any>;
  pageNumber?: FieldPolicy<any> | FieldReadFunction<any>;
  personalData?: FieldPolicy<any> | FieldReadFunction<any>;
  placeholder?: FieldPolicy<any> | FieldReadFunction<any>;
  shouldAllowDuplicates?: FieldPolicy<any> | FieldReadFunction<any>;
  size?: FieldPolicy<any> | FieldReadFunction<any>;
  type?: FieldPolicy<any> | FieldReadFunction<any>;
  value?: FieldPolicy<any> | FieldReadFunction<any>;
  visibility?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type WritingSettingsKeySpecifier = (
  | "defaultCategory"
  | "defaultPostFormat"
  | "useSmilies"
  | WritingSettingsKeySpecifier
)[];
export type WritingSettingsFieldPolicy = {
  defaultCategory?: FieldPolicy<any> | FieldReadFunction<any>;
  defaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>;
  useSmilies?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  AddressField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AddressFieldKeySpecifier
      | (() => undefined | AddressFieldKeySpecifier);
    fields?: AddressFieldFieldPolicy;
  };
  AddressFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AddressFieldValueKeySpecifier
      | (() => undefined | AddressFieldValueKeySpecifier);
    fields?: AddressFieldValueFieldPolicy;
  };
  AddressInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AddressInputPropertyKeySpecifier
      | (() => undefined | AddressInputPropertyKeySpecifier);
    fields?: AddressInputPropertyFieldPolicy;
  };
  Avatar?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | AvatarKeySpecifier
      | (() => undefined | AvatarKeySpecifier);
    fields?: AvatarFieldPolicy;
  };
  CaptchaField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CaptchaFieldKeySpecifier
      | (() => undefined | CaptchaFieldKeySpecifier);
    fields?: CaptchaFieldFieldPolicy;
  };
  Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryKeySpecifier
      | (() => undefined | CategoryKeySpecifier);
    fields?: CategoryFieldPolicy;
  };
  CategoryToAncestorsCategoryConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToAncestorsCategoryConnectionKeySpecifier
      | (() => undefined | CategoryToAncestorsCategoryConnectionKeySpecifier);
    fields?: CategoryToAncestorsCategoryConnectionFieldPolicy;
  };
  CategoryToAncestorsCategoryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier);
    fields?: CategoryToAncestorsCategoryConnectionEdgeFieldPolicy;
  };
  CategoryToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryToCategoryConnectionKeySpecifier
      | (() => undefined | CategoryToCategoryConnectionKeySpecifier);
    fields?: CategoryToCategoryConnectionFieldPolicy;
  };
  CategoryToCategoryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToCategoryConnectionEdgeKeySpecifier
      | (() => undefined | CategoryToCategoryConnectionEdgeKeySpecifier);
    fields?: CategoryToCategoryConnectionEdgeFieldPolicy;
  };
  CategoryToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryToContentNodeConnectionKeySpecifier
      | (() => undefined | CategoryToContentNodeConnectionKeySpecifier);
    fields?: CategoryToContentNodeConnectionFieldPolicy;
  };
  CategoryToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | CategoryToContentNodeConnectionEdgeKeySpecifier);
    fields?: CategoryToContentNodeConnectionEdgeFieldPolicy;
  };
  CategoryToParentCategoryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToParentCategoryConnectionEdgeKeySpecifier
      | (() => undefined | CategoryToParentCategoryConnectionEdgeKeySpecifier);
    fields?: CategoryToParentCategoryConnectionEdgeFieldPolicy;
  };
  CategoryToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryToPostConnectionKeySpecifier
      | (() => undefined | CategoryToPostConnectionKeySpecifier);
    fields?: CategoryToPostConnectionFieldPolicy;
  };
  CategoryToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CategoryToPostConnectionEdgeKeySpecifier
      | (() => undefined | CategoryToPostConnectionEdgeKeySpecifier);
    fields?: CategoryToPostConnectionEdgeFieldPolicy;
  };
  CategoryToTaxonomyConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CategoryToTaxonomyConnectionEdgeKeySpecifier
      | (() => undefined | CategoryToTaxonomyConnectionEdgeKeySpecifier);
    fields?: CategoryToTaxonomyConnectionEdgeFieldPolicy;
  };
  CheckboxField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CheckboxFieldKeySpecifier
      | (() => undefined | CheckboxFieldKeySpecifier);
    fields?: CheckboxFieldFieldPolicy;
  };
  CheckboxFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CheckboxFieldChoiceKeySpecifier
      | (() => undefined | CheckboxFieldChoiceKeySpecifier);
    fields?: CheckboxFieldChoiceFieldPolicy;
  };
  CheckboxFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CheckboxFieldValueKeySpecifier
      | (() => undefined | CheckboxFieldValueKeySpecifier);
    fields?: CheckboxFieldValueFieldPolicy;
  };
  CheckboxInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CheckboxInputPropertyKeySpecifier
      | (() => undefined | CheckboxInputPropertyKeySpecifier);
    fields?: CheckboxInputPropertyFieldPolicy;
  };
  Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentKeySpecifier
      | (() => undefined | CommentKeySpecifier);
    fields?: CommentFieldPolicy;
  };
  CommentAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentAuthorKeySpecifier
      | (() => undefined | CommentAuthorKeySpecifier);
    fields?: CommentAuthorFieldPolicy;
  };
  CommentToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentToCommentConnectionKeySpecifier
      | (() => undefined | CommentToCommentConnectionKeySpecifier);
    fields?: CommentToCommentConnectionFieldPolicy;
  };
  CommentToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommentToCommentConnectionEdgeKeySpecifier
      | (() => undefined | CommentToCommentConnectionEdgeKeySpecifier);
    fields?: CommentToCommentConnectionEdgeFieldPolicy;
  };
  CommentToCommenterConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CommentToCommenterConnectionEdgeKeySpecifier
      | (() => undefined | CommentToCommenterConnectionEdgeKeySpecifier);
    fields?: CommentToCommenterConnectionEdgeFieldPolicy;
  };
  CommentToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CommentToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | CommentToContentNodeConnectionEdgeKeySpecifier);
    fields?: CommentToContentNodeConnectionEdgeFieldPolicy;
  };
  CommentToParentCommentConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | CommentToParentCommentConnectionEdgeKeySpecifier
      | (() => undefined | CommentToParentCommentConnectionEdgeKeySpecifier);
    fields?: CommentToParentCommentConnectionEdgeFieldPolicy;
  };
  Commenter?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CommenterKeySpecifier
      | (() => undefined | CommenterKeySpecifier);
    fields?: CommenterFieldPolicy;
  };
  ConditionalLogic?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ConditionalLogicKeySpecifier
      | (() => undefined | ConditionalLogicKeySpecifier);
    fields?: ConditionalLogicFieldPolicy;
  };
  ConditionalLogicRule?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ConditionalLogicRuleKeySpecifier
      | (() => undefined | ConditionalLogicRuleKeySpecifier);
    fields?: ConditionalLogicRuleFieldPolicy;
  };
  ConsentField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ConsentFieldKeySpecifier
      | (() => undefined | ConsentFieldKeySpecifier);
    fields?: ConsentFieldFieldPolicy;
  };
  ContentNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ContentNodeKeySpecifier
      | (() => undefined | ContentNodeKeySpecifier);
    fields?: ContentNodeFieldPolicy;
  };
  ContentNodeToContentTypeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToContentTypeConnectionEdgeKeySpecifier
      | (() => undefined | ContentNodeToContentTypeConnectionEdgeKeySpecifier);
    fields?: ContentNodeToContentTypeConnectionEdgeFieldPolicy;
  };
  ContentNodeToEditLastConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEditLastConnectionEdgeKeySpecifier
      | (() => undefined | ContentNodeToEditLastConnectionEdgeKeySpecifier);
    fields?: ContentNodeToEditLastConnectionEdgeFieldPolicy;
  };
  ContentNodeToEditLockConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEditLockConnectionEdgeKeySpecifier
      | (() => undefined | ContentNodeToEditLockConnectionEdgeKeySpecifier);
    fields?: ContentNodeToEditLockConnectionEdgeFieldPolicy;
  };
  ContentNodeToEnqueuedScriptConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEnqueuedScriptConnectionKeySpecifier
      | (() => undefined | ContentNodeToEnqueuedScriptConnectionKeySpecifier);
    fields?: ContentNodeToEnqueuedScriptConnectionFieldPolicy;
  };
  ContentNodeToEnqueuedScriptConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier);
    fields?: ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy;
  };
  ContentNodeToEnqueuedStylesheetConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier
      | (() =>
          | undefined
          | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier);
    fields?: ContentNodeToEnqueuedStylesheetConnectionFieldPolicy;
  };
  ContentNodeToEnqueuedStylesheetConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier);
    fields?: ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy;
  };
  ContentTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ContentTemplateKeySpecifier
      | (() => undefined | ContentTemplateKeySpecifier);
    fields?: ContentTemplateFieldPolicy;
  };
  ContentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ContentTypeKeySpecifier
      | (() => undefined | ContentTypeKeySpecifier);
    fields?: ContentTypeFieldPolicy;
  };
  ContentTypeToContentNodeConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentTypeToContentNodeConnectionKeySpecifier
      | (() => undefined | ContentTypeToContentNodeConnectionKeySpecifier);
    fields?: ContentTypeToContentNodeConnectionFieldPolicy;
  };
  ContentTypeToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentTypeToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | ContentTypeToContentNodeConnectionEdgeKeySpecifier);
    fields?: ContentTypeToContentNodeConnectionEdgeFieldPolicy;
  };
  ContentTypeToTaxonomyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ContentTypeToTaxonomyConnectionKeySpecifier
      | (() => undefined | ContentTypeToTaxonomyConnectionKeySpecifier);
    fields?: ContentTypeToTaxonomyConnectionFieldPolicy;
  };
  ContentTypeToTaxonomyConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | ContentTypeToTaxonomyConnectionEdgeKeySpecifier
      | (() => undefined | ContentTypeToTaxonomyConnectionEdgeKeySpecifier);
    fields?: ContentTypeToTaxonomyConnectionEdgeFieldPolicy;
  };
  CreateCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreateCategoryPayloadKeySpecifier
      | (() => undefined | CreateCategoryPayloadKeySpecifier);
    fields?: CreateCategoryPayloadFieldPolicy;
  };
  CreateCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreateCommentPayloadKeySpecifier
      | (() => undefined | CreateCommentPayloadKeySpecifier);
    fields?: CreateCommentPayloadFieldPolicy;
  };
  CreateMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreateMediaItemPayloadKeySpecifier
      | (() => undefined | CreateMediaItemPayloadKeySpecifier);
    fields?: CreateMediaItemPayloadFieldPolicy;
  };
  CreatePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreatePagePayloadKeySpecifier
      | (() => undefined | CreatePagePayloadKeySpecifier);
    fields?: CreatePagePayloadFieldPolicy;
  };
  CreatePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreatePostFormatPayloadKeySpecifier
      | (() => undefined | CreatePostFormatPayloadKeySpecifier);
    fields?: CreatePostFormatPayloadFieldPolicy;
  };
  CreatePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreatePostPayloadKeySpecifier
      | (() => undefined | CreatePostPayloadKeySpecifier);
    fields?: CreatePostPayloadFieldPolicy;
  };
  CreateTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreateTagPayloadKeySpecifier
      | (() => undefined | CreateTagPayloadKeySpecifier);
    fields?: CreateTagPayloadFieldPolicy;
  };
  CreateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | CreateUserPayloadKeySpecifier
      | (() => undefined | CreateUserPayloadKeySpecifier);
    fields?: CreateUserPayloadFieldPolicy;
  };
  DatabaseIdentifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DatabaseIdentifierKeySpecifier
      | (() => undefined | DatabaseIdentifierKeySpecifier);
    fields?: DatabaseIdentifierFieldPolicy;
  };
  DateField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DateFieldKeySpecifier
      | (() => undefined | DateFieldKeySpecifier);
    fields?: DateFieldFieldPolicy;
  };
  DateInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DateInputPropertyKeySpecifier
      | (() => undefined | DateInputPropertyKeySpecifier);
    fields?: DateInputPropertyFieldPolicy;
  };
  DefaultTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DefaultTemplateKeySpecifier
      | (() => undefined | DefaultTemplateKeySpecifier);
    fields?: DefaultTemplateFieldPolicy;
  };
  DeleteCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteCategoryPayloadKeySpecifier
      | (() => undefined | DeleteCategoryPayloadKeySpecifier);
    fields?: DeleteCategoryPayloadFieldPolicy;
  };
  DeleteCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteCommentPayloadKeySpecifier
      | (() => undefined | DeleteCommentPayloadKeySpecifier);
    fields?: DeleteCommentPayloadFieldPolicy;
  };
  DeleteGfDraftEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteGfDraftEntryPayloadKeySpecifier
      | (() => undefined | DeleteGfDraftEntryPayloadKeySpecifier);
    fields?: DeleteGfDraftEntryPayloadFieldPolicy;
  };
  DeleteGfEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteGfEntryPayloadKeySpecifier
      | (() => undefined | DeleteGfEntryPayloadKeySpecifier);
    fields?: DeleteGfEntryPayloadFieldPolicy;
  };
  DeleteMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteMediaItemPayloadKeySpecifier
      | (() => undefined | DeleteMediaItemPayloadKeySpecifier);
    fields?: DeleteMediaItemPayloadFieldPolicy;
  };
  DeletePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeletePagePayloadKeySpecifier
      | (() => undefined | DeletePagePayloadKeySpecifier);
    fields?: DeletePagePayloadFieldPolicy;
  };
  DeletePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeletePostFormatPayloadKeySpecifier
      | (() => undefined | DeletePostFormatPayloadKeySpecifier);
    fields?: DeletePostFormatPayloadFieldPolicy;
  };
  DeletePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeletePostPayloadKeySpecifier
      | (() => undefined | DeletePostPayloadKeySpecifier);
    fields?: DeletePostPayloadFieldPolicy;
  };
  DeleteTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteTagPayloadKeySpecifier
      | (() => undefined | DeleteTagPayloadKeySpecifier);
    fields?: DeleteTagPayloadFieldPolicy;
  };
  DeleteUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DeleteUserPayloadKeySpecifier
      | (() => undefined | DeleteUserPayloadKeySpecifier);
    fields?: DeleteUserPayloadFieldPolicy;
  };
  DiscussionSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | DiscussionSettingsKeySpecifier
      | (() => undefined | DiscussionSettingsKeySpecifier);
    fields?: DiscussionSettingsFieldPolicy;
  };
  EmailField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EmailFieldKeySpecifier
      | (() => undefined | EmailFieldKeySpecifier);
    fields?: EmailFieldFieldPolicy;
  };
  EmailInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EmailInputPropertyKeySpecifier
      | (() => undefined | EmailInputPropertyKeySpecifier);
    fields?: EmailInputPropertyFieldPolicy;
  };
  EnqueuedAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EnqueuedAssetKeySpecifier
      | (() => undefined | EnqueuedAssetKeySpecifier);
    fields?: EnqueuedAssetFieldPolicy;
  };
  EnqueuedScript?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EnqueuedScriptKeySpecifier
      | (() => undefined | EnqueuedScriptKeySpecifier);
    fields?: EnqueuedScriptFieldPolicy;
  };
  EnqueuedStylesheet?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EnqueuedStylesheetKeySpecifier
      | (() => undefined | EnqueuedStylesheetKeySpecifier);
    fields?: EnqueuedStylesheetFieldPolicy;
  };
  EntryQuizResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | EntryQuizResultsKeySpecifier
      | (() => undefined | EntryQuizResultsKeySpecifier);
    fields?: EntryQuizResultsFieldPolicy;
  };
  FieldError?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FieldErrorKeySpecifier
      | (() => undefined | FieldErrorKeySpecifier);
    fields?: FieldErrorFieldPolicy;
  };
  FileUploadField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FileUploadFieldKeySpecifier
      | (() => undefined | FileUploadFieldKeySpecifier);
    fields?: FileUploadFieldFieldPolicy;
  };
  FormButton?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormButtonKeySpecifier
      | (() => undefined | FormButtonKeySpecifier);
    fields?: FormButtonFieldPolicy;
  };
  FormConfirmation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormConfirmationKeySpecifier
      | (() => undefined | FormConfirmationKeySpecifier);
    fields?: FormConfirmationFieldPolicy;
  };
  FormDataPolicies?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormDataPoliciesKeySpecifier
      | (() => undefined | FormDataPoliciesKeySpecifier);
    fields?: FormDataPoliciesFieldPolicy;
  };
  FormEntryDataPolicy?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormEntryDataPolicyKeySpecifier
      | (() => undefined | FormEntryDataPolicyKeySpecifier);
    fields?: FormEntryDataPolicyFieldPolicy;
  };
  FormEntryLimits?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormEntryLimitsKeySpecifier
      | (() => undefined | FormEntryLimitsKeySpecifier);
    fields?: FormEntryLimitsFieldPolicy;
  };
  FormField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormFieldKeySpecifier
      | (() => undefined | FormFieldKeySpecifier);
    fields?: FormFieldFieldPolicy;
  };
  FormFieldDataPolicy?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormFieldDataPolicyKeySpecifier
      | (() => undefined | FormFieldDataPolicyKeySpecifier);
    fields?: FormFieldDataPolicyFieldPolicy;
  };
  FormLastPageButton?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormLastPageButtonKeySpecifier
      | (() => undefined | FormLastPageButtonKeySpecifier);
    fields?: FormLastPageButtonFieldPolicy;
  };
  FormLogin?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormLoginKeySpecifier
      | (() => undefined | FormLoginKeySpecifier);
    fields?: FormLoginFieldPolicy;
  };
  FormNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormNotificationKeySpecifier
      | (() => undefined | FormNotificationKeySpecifier);
    fields?: FormNotificationFieldPolicy;
  };
  FormNotificationRouting?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormNotificationRoutingKeySpecifier
      | (() => undefined | FormNotificationRoutingKeySpecifier);
    fields?: FormNotificationRoutingFieldPolicy;
  };
  FormPagination?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormPaginationKeySpecifier
      | (() => undefined | FormPaginationKeySpecifier);
    fields?: FormPaginationFieldPolicy;
  };
  FormPersonalData?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormPersonalDataKeySpecifier
      | (() => undefined | FormPersonalDataKeySpecifier);
    fields?: FormPersonalDataFieldPolicy;
  };
  FormPostCreation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormPostCreationKeySpecifier
      | (() => undefined | FormPostCreationKeySpecifier);
    fields?: FormPostCreationFieldPolicy;
  };
  FormQuiz?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormQuizKeySpecifier
      | (() => undefined | FormQuizKeySpecifier);
    fields?: FormQuizFieldPolicy;
  };
  FormQuizConfirmation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormQuizConfirmationKeySpecifier
      | (() => undefined | FormQuizConfirmationKeySpecifier);
    fields?: FormQuizConfirmationFieldPolicy;
  };
  FormQuizGrades?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormQuizGradesKeySpecifier
      | (() => undefined | FormQuizGradesKeySpecifier);
    fields?: FormQuizGradesFieldPolicy;
  };
  FormSaveAndContinue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormSaveAndContinueKeySpecifier
      | (() => undefined | FormSaveAndContinueKeySpecifier);
    fields?: FormSaveAndContinueFieldPolicy;
  };
  FormSchedule?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormScheduleKeySpecifier
      | (() => undefined | FormScheduleKeySpecifier);
    fields?: FormScheduleFieldPolicy;
  };
  FormScheduleDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | FormScheduleDetailsKeySpecifier
      | (() => undefined | FormScheduleDetailsKeySpecifier);
    fields?: FormScheduleDetailsFieldPolicy;
  };
  GeneralSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GeneralSettingsKeySpecifier
      | (() => undefined | GeneralSettingsKeySpecifier);
    fields?: GeneralSettingsFieldPolicy;
  };
  GenesisBlocksAnalyticsSettingsSettings?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | GenesisBlocksAnalyticsSettingsSettingsKeySpecifier
      | (() => undefined | GenesisBlocksAnalyticsSettingsSettingsKeySpecifier);
    fields?: GenesisBlocksAnalyticsSettingsSettingsFieldPolicy;
  };
  GenesisBlocksGlobalSettingsSettings?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | GenesisBlocksGlobalSettingsSettingsKeySpecifier
      | (() => undefined | GenesisBlocksGlobalSettingsSettingsKeySpecifier);
    fields?: GenesisBlocksGlobalSettingsSettingsFieldPolicy;
  };
  GfDraftEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfDraftEntryKeySpecifier
      | (() => undefined | GfDraftEntryKeySpecifier);
    fields?: GfDraftEntryFieldPolicy;
  };
  GfEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfEntryKeySpecifier
      | (() => undefined | GfEntryKeySpecifier);
    fields?: GfEntryFieldPolicy;
  };
  GfEntryToFormFieldConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfEntryToFormFieldConnectionKeySpecifier
      | (() => undefined | GfEntryToFormFieldConnectionKeySpecifier);
    fields?: GfEntryToFormFieldConnectionFieldPolicy;
  };
  GfEntryToFormFieldConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | GfEntryToFormFieldConnectionEdgeKeySpecifier
      | (() => undefined | GfEntryToFormFieldConnectionEdgeKeySpecifier);
    fields?: GfEntryToFormFieldConnectionEdgeFieldPolicy;
  };
  GfForm?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfFormKeySpecifier
      | (() => undefined | GfFormKeySpecifier);
    fields?: GfFormFieldPolicy;
  };
  GfFormToFormFieldConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfFormToFormFieldConnectionKeySpecifier
      | (() => undefined | GfFormToFormFieldConnectionKeySpecifier);
    fields?: GfFormToFormFieldConnectionFieldPolicy;
  };
  GfFormToFormFieldConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfFormToFormFieldConnectionEdgeKeySpecifier
      | (() => undefined | GfFormToFormFieldConnectionEdgeKeySpecifier);
    fields?: GfFormToFormFieldConnectionEdgeFieldPolicy;
  };
  GfFormToGfEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfFormToGfEntryConnectionKeySpecifier
      | (() => undefined | GfFormToGfEntryConnectionKeySpecifier);
    fields?: GfFormToGfEntryConnectionFieldPolicy;
  };
  GfFormToGfEntryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfFormToGfEntryConnectionEdgeKeySpecifier
      | (() => undefined | GfFormToGfEntryConnectionEdgeKeySpecifier);
    fields?: GfFormToGfEntryConnectionEdgeFieldPolicy;
  };
  GfLogger?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfLoggerKeySpecifier
      | (() => undefined | GfLoggerKeySpecifier);
    fields?: GfLoggerFieldPolicy;
  };
  GfQuizResults?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfQuizResultsKeySpecifier
      | (() => undefined | GfQuizResultsKeySpecifier);
    fields?: GfQuizResultsFieldPolicy;
  };
  GfQuizResultsChoiceCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfQuizResultsChoiceCountKeySpecifier
      | (() => undefined | GfQuizResultsChoiceCountKeySpecifier);
    fields?: GfQuizResultsChoiceCountFieldPolicy;
  };
  GfQuizResultsFieldCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfQuizResultsFieldCountKeySpecifier
      | (() => undefined | GfQuizResultsFieldCountKeySpecifier);
    fields?: GfQuizResultsFieldCountFieldPolicy;
  };
  GfQuizResultsFieldCountToQuizFieldConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | GfQuizResultsFieldCountToQuizFieldConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | GfQuizResultsFieldCountToQuizFieldConnectionEdgeKeySpecifier);
    fields?: GfQuizResultsFieldCountToQuizFieldConnectionEdgeFieldPolicy;
  };
  GfQuizResultsGradeCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfQuizResultsGradeCountKeySpecifier
      | (() => undefined | GfQuizResultsGradeCountKeySpecifier);
    fields?: GfQuizResultsGradeCountFieldPolicy;
  };
  GfQuizResultsScoreCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfQuizResultsScoreCountKeySpecifier
      | (() => undefined | GfQuizResultsScoreCountKeySpecifier);
    fields?: GfQuizResultsScoreCountFieldPolicy;
  };
  GfSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfSettingsKeySpecifier
      | (() => undefined | GfSettingsKeySpecifier);
    fields?: GfSettingsFieldPolicy;
  };
  GfSettingsLogging?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfSettingsLoggingKeySpecifier
      | (() => undefined | GfSettingsLoggingKeySpecifier);
    fields?: GfSettingsLoggingFieldPolicy;
  };
  GfSubmittedEntry?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | GfSubmittedEntryKeySpecifier
      | (() => undefined | GfSubmittedEntryKeySpecifier);
    fields?: GfSubmittedEntryFieldPolicy;
  };
  HiddenField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | HiddenFieldKeySpecifier
      | (() => undefined | HiddenFieldKeySpecifier);
    fields?: HiddenFieldFieldPolicy;
  };
  HierarchicalContentNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | HierarchicalContentNodeKeySpecifier
      | (() => undefined | HierarchicalContentNodeKeySpecifier);
    fields?: HierarchicalContentNodeFieldPolicy;
  };
  HierarchicalContentNodeToContentNodeAncestorsConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier
      | (() =>
          | undefined
          | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier);
    fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy;
  };
  HierarchicalContentNodeToContentNodeAncestorsConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier);
    fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy;
  };
  HierarchicalContentNodeToContentNodeChildrenConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier
      | (() =>
          | undefined
          | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier);
    fields?: HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy;
  };
  HierarchicalContentNodeToContentNodeChildrenConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier);
    fields?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy;
  };
  HierarchicalContentNodeToParentContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier);
    fields?: HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy;
  };
  HierarchicalTermNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | HierarchicalTermNodeKeySpecifier
      | (() => undefined | HierarchicalTermNodeKeySpecifier);
    fields?: HierarchicalTermNodeFieldPolicy;
  };
  HtmlField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | HtmlFieldKeySpecifier
      | (() => undefined | HtmlFieldKeySpecifier);
    fields?: HtmlFieldFieldPolicy;
  };
  ImageFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ImageFieldValueKeySpecifier
      | (() => undefined | ImageFieldValueKeySpecifier);
    fields?: ImageFieldValueFieldPolicy;
  };
  LikertField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | LikertFieldKeySpecifier
      | (() => undefined | LikertFieldKeySpecifier);
    fields?: LikertFieldFieldPolicy;
  };
  ListField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ListFieldKeySpecifier
      | (() => undefined | ListFieldKeySpecifier);
    fields?: ListFieldFieldPolicy;
  };
  ListFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ListFieldChoiceKeySpecifier
      | (() => undefined | ListFieldChoiceKeySpecifier);
    fields?: ListFieldChoiceFieldPolicy;
  };
  ListFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ListFieldValueKeySpecifier
      | (() => undefined | ListFieldValueKeySpecifier);
    fields?: ListFieldValueFieldPolicy;
  };
  LoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | LoginPayloadKeySpecifier
      | (() => undefined | LoginPayloadKeySpecifier);
    fields?: LoginPayloadFieldPolicy;
  };
  MediaDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaDetailsKeySpecifier
      | (() => undefined | MediaDetailsKeySpecifier);
    fields?: MediaDetailsFieldPolicy;
  };
  MediaItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaItemKeySpecifier
      | (() => undefined | MediaItemKeySpecifier);
    fields?: MediaItemFieldPolicy;
  };
  MediaItemMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaItemMetaKeySpecifier
      | (() => undefined | MediaItemMetaKeySpecifier);
    fields?: MediaItemMetaFieldPolicy;
  };
  MediaItemToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaItemToCommentConnectionKeySpecifier
      | (() => undefined | MediaItemToCommentConnectionKeySpecifier);
    fields?: MediaItemToCommentConnectionFieldPolicy;
  };
  MediaItemToCommentConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | MediaItemToCommentConnectionEdgeKeySpecifier
      | (() => undefined | MediaItemToCommentConnectionEdgeKeySpecifier);
    fields?: MediaItemToCommentConnectionEdgeFieldPolicy;
  };
  MediaSize?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MediaSizeKeySpecifier
      | (() => undefined | MediaSizeKeySpecifier);
    fields?: MediaSizeFieldPolicy;
  };
  Menu?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier);
    fields?: MenuFieldPolicy;
  };
  MenuItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuItemKeySpecifier
      | (() => undefined | MenuItemKeySpecifier);
    fields?: MenuItemFieldPolicy;
  };
  MenuItemLinkable?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuItemLinkableKeySpecifier
      | (() => undefined | MenuItemLinkableKeySpecifier);
    fields?: MenuItemLinkableFieldPolicy;
  };
  MenuItemToMenuConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuItemToMenuConnectionEdgeKeySpecifier
      | (() => undefined | MenuItemToMenuConnectionEdgeKeySpecifier);
    fields?: MenuItemToMenuConnectionEdgeFieldPolicy;
  };
  MenuItemToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuItemToMenuItemConnectionKeySpecifier
      | (() => undefined | MenuItemToMenuItemConnectionKeySpecifier);
    fields?: MenuItemToMenuItemConnectionFieldPolicy;
  };
  MenuItemToMenuItemConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | MenuItemToMenuItemConnectionEdgeKeySpecifier
      | (() => undefined | MenuItemToMenuItemConnectionEdgeKeySpecifier);
    fields?: MenuItemToMenuItemConnectionEdgeFieldPolicy;
  };
  MenuItemToMenuItemLinkableConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier);
    fields?: MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy;
  };
  MenuToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuToMenuItemConnectionKeySpecifier
      | (() => undefined | MenuToMenuItemConnectionKeySpecifier);
    fields?: MenuToMenuItemConnectionFieldPolicy;
  };
  MenuToMenuItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MenuToMenuItemConnectionEdgeKeySpecifier
      | (() => undefined | MenuToMenuItemConnectionEdgeKeySpecifier);
    fields?: MenuToMenuItemConnectionEdgeFieldPolicy;
  };
  MultiSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MultiSelectFieldKeySpecifier
      | (() => undefined | MultiSelectFieldKeySpecifier);
    fields?: MultiSelectFieldFieldPolicy;
  };
  MultiSelectFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MultiSelectFieldChoiceKeySpecifier
      | (() => undefined | MultiSelectFieldChoiceKeySpecifier);
    fields?: MultiSelectFieldChoiceFieldPolicy;
  };
  NameField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NameFieldKeySpecifier
      | (() => undefined | NameFieldKeySpecifier);
    fields?: NameFieldFieldPolicy;
  };
  NameFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NameFieldChoiceKeySpecifier
      | (() => undefined | NameFieldChoiceKeySpecifier);
    fields?: NameFieldChoiceFieldPolicy;
  };
  NameFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NameFieldValueKeySpecifier
      | (() => undefined | NameFieldValueKeySpecifier);
    fields?: NameFieldValueFieldPolicy;
  };
  NameInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NameInputPropertyKeySpecifier
      | (() => undefined | NameInputPropertyKeySpecifier);
    fields?: NameInputPropertyFieldPolicy;
  };
  Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier);
    fields?: NodeFieldPolicy;
  };
  NodeWithAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithAuthorKeySpecifier
      | (() => undefined | NodeWithAuthorKeySpecifier);
    fields?: NodeWithAuthorFieldPolicy;
  };
  NodeWithAuthorToUserConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | NodeWithAuthorToUserConnectionEdgeKeySpecifier
      | (() => undefined | NodeWithAuthorToUserConnectionEdgeKeySpecifier);
    fields?: NodeWithAuthorToUserConnectionEdgeFieldPolicy;
  };
  NodeWithComments?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithCommentsKeySpecifier
      | (() => undefined | NodeWithCommentsKeySpecifier);
    fields?: NodeWithCommentsFieldPolicy;
  };
  NodeWithContentEditor?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithContentEditorKeySpecifier
      | (() => undefined | NodeWithContentEditorKeySpecifier);
    fields?: NodeWithContentEditorFieldPolicy;
  };
  NodeWithExcerpt?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithExcerptKeySpecifier
      | (() => undefined | NodeWithExcerptKeySpecifier);
    fields?: NodeWithExcerptFieldPolicy;
  };
  NodeWithFeaturedImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithFeaturedImageKeySpecifier
      | (() => undefined | NodeWithFeaturedImageKeySpecifier);
    fields?: NodeWithFeaturedImageFieldPolicy;
  };
  NodeWithFeaturedImageToMediaItemConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier);
    fields?: NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy;
  };
  NodeWithForm?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithFormKeySpecifier
      | (() => undefined | NodeWithFormKeySpecifier);
    fields?: NodeWithFormFieldPolicy;
  };
  NodeWithPageAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithPageAttributesKeySpecifier
      | (() => undefined | NodeWithPageAttributesKeySpecifier);
    fields?: NodeWithPageAttributesFieldPolicy;
  };
  NodeWithRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithRevisionsKeySpecifier
      | (() => undefined | NodeWithRevisionsKeySpecifier);
    fields?: NodeWithRevisionsFieldPolicy;
  };
  NodeWithRevisionsToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier);
    fields?: NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy;
  };
  NodeWithTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithTemplateKeySpecifier
      | (() => undefined | NodeWithTemplateKeySpecifier);
    fields?: NodeWithTemplateFieldPolicy;
  };
  NodeWithTitle?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithTitleKeySpecifier
      | (() => undefined | NodeWithTitleKeySpecifier);
    fields?: NodeWithTitleFieldPolicy;
  };
  NodeWithTrackbacks?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NodeWithTrackbacksKeySpecifier
      | (() => undefined | NodeWithTrackbacksKeySpecifier);
    fields?: NodeWithTrackbacksFieldPolicy;
  };
  NumberField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | NumberFieldKeySpecifier
      | (() => undefined | NumberFieldKeySpecifier);
    fields?: NumberFieldFieldPolicy;
  };
  Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier);
    fields?: PageFieldPolicy;
  };
  PageField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageFieldKeySpecifier
      | (() => undefined | PageFieldKeySpecifier);
    fields?: PageFieldFieldPolicy;
  };
  PageToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageToCommentConnectionKeySpecifier
      | (() => undefined | PageToCommentConnectionKeySpecifier);
    fields?: PageToCommentConnectionFieldPolicy;
  };
  PageToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageToCommentConnectionEdgeKeySpecifier
      | (() => undefined | PageToCommentConnectionEdgeKeySpecifier);
    fields?: PageToCommentConnectionEdgeFieldPolicy;
  };
  PageToPreviewConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageToPreviewConnectionEdgeKeySpecifier
      | (() => undefined | PageToPreviewConnectionEdgeKeySpecifier);
    fields?: PageToPreviewConnectionEdgeFieldPolicy;
  };
  PageToRevisionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageToRevisionConnectionKeySpecifier
      | (() => undefined | PageToRevisionConnectionKeySpecifier);
    fields?: PageToRevisionConnectionFieldPolicy;
  };
  PageToRevisionConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PageToRevisionConnectionEdgeKeySpecifier
      | (() => undefined | PageToRevisionConnectionEdgeKeySpecifier);
    fields?: PageToRevisionConnectionEdgeFieldPolicy;
  };
  PasswordField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PasswordFieldKeySpecifier
      | (() => undefined | PasswordFieldKeySpecifier);
    fields?: PasswordFieldFieldPolicy;
  };
  PasswordInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PasswordInputPropertyKeySpecifier
      | (() => undefined | PasswordInputPropertyKeySpecifier);
    fields?: PasswordInputPropertyFieldPolicy;
  };
  PhoneField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PhoneFieldKeySpecifier
      | (() => undefined | PhoneFieldKeySpecifier);
    fields?: PhoneFieldFieldPolicy;
  };
  Plugin?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PluginKeySpecifier
      | (() => undefined | PluginKeySpecifier);
    fields?: PluginFieldPolicy;
  };
  PollField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PollFieldKeySpecifier
      | (() => undefined | PollFieldKeySpecifier);
    fields?: PollFieldFieldPolicy;
  };
  Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier);
    fields?: PostFieldPolicy;
  };
  PostCategoryCheckboxField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryCheckboxFieldKeySpecifier
      | (() => undefined | PostCategoryCheckboxFieldKeySpecifier);
    fields?: PostCategoryCheckboxFieldFieldPolicy;
  };
  PostCategoryField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryFieldKeySpecifier
      | (() => undefined | PostCategoryFieldKeySpecifier);
    fields?: PostCategoryFieldFieldPolicy;
  };
  PostCategoryFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryFieldChoiceKeySpecifier
      | (() => undefined | PostCategoryFieldChoiceKeySpecifier);
    fields?: PostCategoryFieldChoiceFieldPolicy;
  };
  PostCategoryInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryInputPropertyKeySpecifier
      | (() => undefined | PostCategoryInputPropertyKeySpecifier);
    fields?: PostCategoryInputPropertyFieldPolicy;
  };
  PostCategoryMultiSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryMultiSelectFieldKeySpecifier
      | (() => undefined | PostCategoryMultiSelectFieldKeySpecifier);
    fields?: PostCategoryMultiSelectFieldFieldPolicy;
  };
  PostCategoryRadioField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategoryRadioFieldKeySpecifier
      | (() => undefined | PostCategoryRadioFieldKeySpecifier);
    fields?: PostCategoryRadioFieldFieldPolicy;
  };
  PostCategorySelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCategorySelectFieldKeySpecifier
      | (() => undefined | PostCategorySelectFieldKeySpecifier);
    fields?: PostCategorySelectFieldFieldPolicy;
  };
  PostContentField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostContentFieldKeySpecifier
      | (() => undefined | PostContentFieldKeySpecifier);
    fields?: PostContentFieldFieldPolicy;
  };
  PostCustomCheckboxField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomCheckboxFieldKeySpecifier
      | (() => undefined | PostCustomCheckboxFieldKeySpecifier);
    fields?: PostCustomCheckboxFieldFieldPolicy;
  };
  PostCustomCheckboxFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomCheckboxFieldChoiceKeySpecifier
      | (() => undefined | PostCustomCheckboxFieldChoiceKeySpecifier);
    fields?: PostCustomCheckboxFieldChoiceFieldPolicy;
  };
  PostCustomDateField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomDateFieldKeySpecifier
      | (() => undefined | PostCustomDateFieldKeySpecifier);
    fields?: PostCustomDateFieldFieldPolicy;
  };
  PostCustomEmailField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomEmailFieldKeySpecifier
      | (() => undefined | PostCustomEmailFieldKeySpecifier);
    fields?: PostCustomEmailFieldFieldPolicy;
  };
  PostCustomField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomFieldKeySpecifier
      | (() => undefined | PostCustomFieldKeySpecifier);
    fields?: PostCustomFieldFieldPolicy;
  };
  PostCustomFileuploadField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomFileuploadFieldKeySpecifier
      | (() => undefined | PostCustomFileuploadFieldKeySpecifier);
    fields?: PostCustomFileuploadFieldFieldPolicy;
  };
  PostCustomHiddenField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomHiddenFieldKeySpecifier
      | (() => undefined | PostCustomHiddenFieldKeySpecifier);
    fields?: PostCustomHiddenFieldFieldPolicy;
  };
  PostCustomInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomInputPropertyKeySpecifier
      | (() => undefined | PostCustomInputPropertyKeySpecifier);
    fields?: PostCustomInputPropertyFieldPolicy;
  };
  PostCustomListField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomListFieldKeySpecifier
      | (() => undefined | PostCustomListFieldKeySpecifier);
    fields?: PostCustomListFieldFieldPolicy;
  };
  PostCustomListFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomListFieldChoiceKeySpecifier
      | (() => undefined | PostCustomListFieldChoiceKeySpecifier);
    fields?: PostCustomListFieldChoiceFieldPolicy;
  };
  PostCustomMultiSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomMultiSelectFieldKeySpecifier
      | (() => undefined | PostCustomMultiSelectFieldKeySpecifier);
    fields?: PostCustomMultiSelectFieldFieldPolicy;
  };
  PostCustomMultiSelectFieldChoice?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | PostCustomMultiSelectFieldChoiceKeySpecifier
      | (() => undefined | PostCustomMultiSelectFieldChoiceKeySpecifier);
    fields?: PostCustomMultiSelectFieldChoiceFieldPolicy;
  };
  PostCustomNumberField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomNumberFieldKeySpecifier
      | (() => undefined | PostCustomNumberFieldKeySpecifier);
    fields?: PostCustomNumberFieldFieldPolicy;
  };
  PostCustomPhoneField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomPhoneFieldKeySpecifier
      | (() => undefined | PostCustomPhoneFieldKeySpecifier);
    fields?: PostCustomPhoneFieldFieldPolicy;
  };
  PostCustomRadioField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomRadioFieldKeySpecifier
      | (() => undefined | PostCustomRadioFieldKeySpecifier);
    fields?: PostCustomRadioFieldFieldPolicy;
  };
  PostCustomRadioFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomRadioFieldChoiceKeySpecifier
      | (() => undefined | PostCustomRadioFieldChoiceKeySpecifier);
    fields?: PostCustomRadioFieldChoiceFieldPolicy;
  };
  PostCustomSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomSelectFieldKeySpecifier
      | (() => undefined | PostCustomSelectFieldKeySpecifier);
    fields?: PostCustomSelectFieldFieldPolicy;
  };
  PostCustomSelectFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomSelectFieldChoiceKeySpecifier
      | (() => undefined | PostCustomSelectFieldChoiceKeySpecifier);
    fields?: PostCustomSelectFieldChoiceFieldPolicy;
  };
  PostCustomTextAreaField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomTextAreaFieldKeySpecifier
      | (() => undefined | PostCustomTextAreaFieldKeySpecifier);
    fields?: PostCustomTextAreaFieldFieldPolicy;
  };
  PostCustomTextField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomTextFieldKeySpecifier
      | (() => undefined | PostCustomTextFieldKeySpecifier);
    fields?: PostCustomTextFieldFieldPolicy;
  };
  PostCustomTimeField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomTimeFieldKeySpecifier
      | (() => undefined | PostCustomTimeFieldKeySpecifier);
    fields?: PostCustomTimeFieldFieldPolicy;
  };
  PostCustomWebsiteField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostCustomWebsiteFieldKeySpecifier
      | (() => undefined | PostCustomWebsiteFieldKeySpecifier);
    fields?: PostCustomWebsiteFieldFieldPolicy;
  };
  PostExcerptField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostExcerptFieldKeySpecifier
      | (() => undefined | PostExcerptFieldKeySpecifier);
    fields?: PostExcerptFieldFieldPolicy;
  };
  PostFormat?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostFormatKeySpecifier
      | (() => undefined | PostFormatKeySpecifier);
    fields?: PostFormatFieldPolicy;
  };
  PostFormatToContentNodeConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | PostFormatToContentNodeConnectionKeySpecifier
      | (() => undefined | PostFormatToContentNodeConnectionKeySpecifier);
    fields?: PostFormatToContentNodeConnectionFieldPolicy;
  };
  PostFormatToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | PostFormatToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | PostFormatToContentNodeConnectionEdgeKeySpecifier);
    fields?: PostFormatToContentNodeConnectionEdgeFieldPolicy;
  };
  PostFormatToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostFormatToPostConnectionKeySpecifier
      | (() => undefined | PostFormatToPostConnectionKeySpecifier);
    fields?: PostFormatToPostConnectionFieldPolicy;
  };
  PostFormatToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostFormatToPostConnectionEdgeKeySpecifier
      | (() => undefined | PostFormatToPostConnectionEdgeKeySpecifier);
    fields?: PostFormatToPostConnectionEdgeFieldPolicy;
  };
  PostFormatToTaxonomyConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | PostFormatToTaxonomyConnectionEdgeKeySpecifier
      | (() => undefined | PostFormatToTaxonomyConnectionEdgeKeySpecifier);
    fields?: PostFormatToTaxonomyConnectionEdgeFieldPolicy;
  };
  PostImageField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostImageFieldKeySpecifier
      | (() => undefined | PostImageFieldKeySpecifier);
    fields?: PostImageFieldFieldPolicy;
  };
  PostTagsCheckboxField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsCheckboxFieldKeySpecifier
      | (() => undefined | PostTagsCheckboxFieldKeySpecifier);
    fields?: PostTagsCheckboxFieldFieldPolicy;
  };
  PostTagsCheckboxFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsCheckboxFieldChoiceKeySpecifier
      | (() => undefined | PostTagsCheckboxFieldChoiceKeySpecifier);
    fields?: PostTagsCheckboxFieldChoiceFieldPolicy;
  };
  PostTagsField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsFieldKeySpecifier
      | (() => undefined | PostTagsFieldKeySpecifier);
    fields?: PostTagsFieldFieldPolicy;
  };
  PostTagsInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsInputPropertyKeySpecifier
      | (() => undefined | PostTagsInputPropertyKeySpecifier);
    fields?: PostTagsInputPropertyFieldPolicy;
  };
  PostTagsMultiSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsMultiSelectFieldKeySpecifier
      | (() => undefined | PostTagsMultiSelectFieldKeySpecifier);
    fields?: PostTagsMultiSelectFieldFieldPolicy;
  };
  PostTagsMultiSelectFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsMultiSelectFieldChoiceKeySpecifier
      | (() => undefined | PostTagsMultiSelectFieldChoiceKeySpecifier);
    fields?: PostTagsMultiSelectFieldChoiceFieldPolicy;
  };
  PostTagsRadioField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsRadioFieldKeySpecifier
      | (() => undefined | PostTagsRadioFieldKeySpecifier);
    fields?: PostTagsRadioFieldFieldPolicy;
  };
  PostTagsRadioFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsRadioFieldChoiceKeySpecifier
      | (() => undefined | PostTagsRadioFieldChoiceKeySpecifier);
    fields?: PostTagsRadioFieldChoiceFieldPolicy;
  };
  PostTagsSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsSelectFieldKeySpecifier
      | (() => undefined | PostTagsSelectFieldKeySpecifier);
    fields?: PostTagsSelectFieldFieldPolicy;
  };
  PostTagsSelectFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsSelectFieldChoiceKeySpecifier
      | (() => undefined | PostTagsSelectFieldChoiceKeySpecifier);
    fields?: PostTagsSelectFieldChoiceFieldPolicy;
  };
  PostTagsTextField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTagsTextFieldKeySpecifier
      | (() => undefined | PostTagsTextFieldKeySpecifier);
    fields?: PostTagsTextFieldFieldPolicy;
  };
  PostTitleField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTitleFieldKeySpecifier
      | (() => undefined | PostTitleFieldKeySpecifier);
    fields?: PostTitleFieldFieldPolicy;
  };
  PostToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToCategoryConnectionKeySpecifier
      | (() => undefined | PostToCategoryConnectionKeySpecifier);
    fields?: PostToCategoryConnectionFieldPolicy;
  };
  PostToCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToCategoryConnectionEdgeKeySpecifier
      | (() => undefined | PostToCategoryConnectionEdgeKeySpecifier);
    fields?: PostToCategoryConnectionEdgeFieldPolicy;
  };
  PostToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToCommentConnectionKeySpecifier
      | (() => undefined | PostToCommentConnectionKeySpecifier);
    fields?: PostToCommentConnectionFieldPolicy;
  };
  PostToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToCommentConnectionEdgeKeySpecifier
      | (() => undefined | PostToCommentConnectionEdgeKeySpecifier);
    fields?: PostToCommentConnectionEdgeFieldPolicy;
  };
  PostToPostFormatConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToPostFormatConnectionKeySpecifier
      | (() => undefined | PostToPostFormatConnectionKeySpecifier);
    fields?: PostToPostFormatConnectionFieldPolicy;
  };
  PostToPostFormatConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToPostFormatConnectionEdgeKeySpecifier
      | (() => undefined | PostToPostFormatConnectionEdgeKeySpecifier);
    fields?: PostToPostFormatConnectionEdgeFieldPolicy;
  };
  PostToPreviewConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToPreviewConnectionEdgeKeySpecifier
      | (() => undefined | PostToPreviewConnectionEdgeKeySpecifier);
    fields?: PostToPreviewConnectionEdgeFieldPolicy;
  };
  PostToRevisionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToRevisionConnectionKeySpecifier
      | (() => undefined | PostToRevisionConnectionKeySpecifier);
    fields?: PostToRevisionConnectionFieldPolicy;
  };
  PostToRevisionConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToRevisionConnectionEdgeKeySpecifier
      | (() => undefined | PostToRevisionConnectionEdgeKeySpecifier);
    fields?: PostToRevisionConnectionEdgeFieldPolicy;
  };
  PostToTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToTagConnectionKeySpecifier
      | (() => undefined | PostToTagConnectionKeySpecifier);
    fields?: PostToTagConnectionFieldPolicy;
  };
  PostToTagConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToTagConnectionEdgeKeySpecifier
      | (() => undefined | PostToTagConnectionEdgeKeySpecifier);
    fields?: PostToTagConnectionEdgeFieldPolicy;
  };
  PostToTermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToTermNodeConnectionKeySpecifier
      | (() => undefined | PostToTermNodeConnectionKeySpecifier);
    fields?: PostToTermNodeConnectionFieldPolicy;
  };
  PostToTermNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostToTermNodeConnectionEdgeKeySpecifier
      | (() => undefined | PostToTermNodeConnectionEdgeKeySpecifier);
    fields?: PostToTermNodeConnectionEdgeFieldPolicy;
  };
  PostTypeLabelDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTypeLabelDetailsKeySpecifier
      | (() => undefined | PostTypeLabelDetailsKeySpecifier);
    fields?: PostTypeLabelDetailsFieldPolicy;
  };
  PostTypeSEO?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | PostTypeSEOKeySpecifier
      | (() => undefined | PostTypeSEOKeySpecifier);
    fields?: PostTypeSEOFieldPolicy;
  };
  QuizCheckboxField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizCheckboxFieldKeySpecifier
      | (() => undefined | QuizCheckboxFieldKeySpecifier);
    fields?: QuizCheckboxFieldFieldPolicy;
  };
  QuizField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizFieldKeySpecifier
      | (() => undefined | QuizFieldKeySpecifier);
    fields?: QuizFieldFieldPolicy;
  };
  QuizFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizFieldChoiceKeySpecifier
      | (() => undefined | QuizFieldChoiceKeySpecifier);
    fields?: QuizFieldChoiceFieldPolicy;
  };
  QuizInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizInputPropertyKeySpecifier
      | (() => undefined | QuizInputPropertyKeySpecifier);
    fields?: QuizInputPropertyFieldPolicy;
  };
  QuizRadioField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizRadioFieldKeySpecifier
      | (() => undefined | QuizRadioFieldKeySpecifier);
    fields?: QuizRadioFieldFieldPolicy;
  };
  QuizSelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QuizSelectFieldKeySpecifier
      | (() => undefined | QuizSelectFieldKeySpecifier);
    fields?: QuizSelectFieldFieldPolicy;
  };
  RadioField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RadioFieldKeySpecifier
      | (() => undefined | RadioFieldKeySpecifier);
    fields?: RadioFieldFieldPolicy;
  };
  RadioFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RadioFieldChoiceKeySpecifier
      | (() => undefined | RadioFieldChoiceKeySpecifier);
    fields?: RadioFieldChoiceFieldPolicy;
  };
  RankField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RankFieldKeySpecifier
      | (() => undefined | RankFieldKeySpecifier);
    fields?: RankFieldFieldPolicy;
  };
  RankFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RankFieldChoiceKeySpecifier
      | (() => undefined | RankFieldChoiceKeySpecifier);
    fields?: RankFieldChoiceFieldPolicy;
  };
  RatingField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RatingFieldKeySpecifier
      | (() => undefined | RatingFieldKeySpecifier);
    fields?: RatingFieldFieldPolicy;
  };
  RatingFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RatingFieldChoiceKeySpecifier
      | (() => undefined | RatingFieldChoiceKeySpecifier);
    fields?: RatingFieldChoiceFieldPolicy;
  };
  ReadingSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ReadingSettingsKeySpecifier
      | (() => undefined | ReadingSettingsKeySpecifier);
    fields?: ReadingSettingsFieldPolicy;
  };
  RecaptchaField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RecaptchaFieldKeySpecifier
      | (() => undefined | RecaptchaFieldKeySpecifier);
    fields?: RecaptchaFieldFieldPolicy;
  };
  RefreshJwtAuthTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RefreshJwtAuthTokenPayloadKeySpecifier
      | (() => undefined | RefreshJwtAuthTokenPayloadKeySpecifier);
    fields?: RefreshJwtAuthTokenPayloadFieldPolicy;
  };
  RegisterUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RegisterUserPayloadKeySpecifier
      | (() => undefined | RegisterUserPayloadKeySpecifier);
    fields?: RegisterUserPayloadFieldPolicy;
  };
  RememberMeField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RememberMeFieldKeySpecifier
      | (() => undefined | RememberMeFieldKeySpecifier);
    fields?: RememberMeFieldFieldPolicy;
  };
  RememberMeFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RememberMeFieldChoiceKeySpecifier
      | (() => undefined | RememberMeFieldChoiceKeySpecifier);
    fields?: RememberMeFieldChoiceFieldPolicy;
  };
  RememberMeInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RememberMeInputPropertyKeySpecifier
      | (() => undefined | RememberMeInputPropertyKeySpecifier);
    fields?: RememberMeInputPropertyFieldPolicy;
  };
  ResetUserPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ResetUserPasswordPayloadKeySpecifier
      | (() => undefined | ResetUserPasswordPayloadKeySpecifier);
    fields?: ResetUserPasswordPayloadFieldPolicy;
  };
  RestoreCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RestoreCommentPayloadKeySpecifier
      | (() => undefined | RestoreCommentPayloadKeySpecifier);
    fields?: RestoreCommentPayloadFieldPolicy;
  };
  RootMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootMutationKeySpecifier
      | (() => undefined | RootMutationKeySpecifier);
    fields?: RootMutationFieldPolicy;
  };
  RootQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryKeySpecifier
      | (() => undefined | RootQueryKeySpecifier);
    fields?: RootQueryFieldPolicy;
  };
  RootQueryToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToCategoryConnectionKeySpecifier
      | (() => undefined | RootQueryToCategoryConnectionKeySpecifier);
    fields?: RootQueryToCategoryConnectionFieldPolicy;
  };
  RootQueryToCategoryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToCategoryConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToCategoryConnectionEdgeKeySpecifier);
    fields?: RootQueryToCategoryConnectionEdgeFieldPolicy;
  };
  RootQueryToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToCommentConnectionKeySpecifier
      | (() => undefined | RootQueryToCommentConnectionKeySpecifier);
    fields?: RootQueryToCommentConnectionFieldPolicy;
  };
  RootQueryToCommentConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToCommentConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToCommentConnectionEdgeKeySpecifier);
    fields?: RootQueryToCommentConnectionEdgeFieldPolicy;
  };
  RootQueryToContentNodeConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentNodeConnectionKeySpecifier
      | (() => undefined | RootQueryToContentNodeConnectionKeySpecifier);
    fields?: RootQueryToContentNodeConnectionFieldPolicy;
  };
  RootQueryToContentNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToContentNodeConnectionEdgeKeySpecifier);
    fields?: RootQueryToContentNodeConnectionEdgeFieldPolicy;
  };
  RootQueryToContentRevisionUnionConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentRevisionUnionConnectionKeySpecifier
      | (() =>
          | undefined
          | RootQueryToContentRevisionUnionConnectionKeySpecifier);
    fields?: RootQueryToContentRevisionUnionConnectionFieldPolicy;
  };
  RootQueryToContentRevisionUnionConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | RootQueryToContentRevisionUnionConnectionEdgeKeySpecifier);
    fields?: RootQueryToContentRevisionUnionConnectionEdgeFieldPolicy;
  };
  RootQueryToContentTypeConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentTypeConnectionKeySpecifier
      | (() => undefined | RootQueryToContentTypeConnectionKeySpecifier);
    fields?: RootQueryToContentTypeConnectionFieldPolicy;
  };
  RootQueryToContentTypeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToContentTypeConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToContentTypeConnectionEdgeKeySpecifier);
    fields?: RootQueryToContentTypeConnectionEdgeFieldPolicy;
  };
  RootQueryToEnqueuedScriptConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToEnqueuedScriptConnectionKeySpecifier
      | (() => undefined | RootQueryToEnqueuedScriptConnectionKeySpecifier);
    fields?: RootQueryToEnqueuedScriptConnectionFieldPolicy;
  };
  RootQueryToEnqueuedScriptConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier);
    fields?: RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy;
  };
  RootQueryToEnqueuedStylesheetConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToEnqueuedStylesheetConnectionKeySpecifier
      | (() => undefined | RootQueryToEnqueuedStylesheetConnectionKeySpecifier);
    fields?: RootQueryToEnqueuedStylesheetConnectionFieldPolicy;
  };
  RootQueryToEnqueuedStylesheetConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier);
    fields?: RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy;
  };
  RootQueryToGfEntryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToGfEntryConnectionKeySpecifier
      | (() => undefined | RootQueryToGfEntryConnectionKeySpecifier);
    fields?: RootQueryToGfEntryConnectionFieldPolicy;
  };
  RootQueryToGfEntryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToGfEntryConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToGfEntryConnectionEdgeKeySpecifier);
    fields?: RootQueryToGfEntryConnectionEdgeFieldPolicy;
  };
  RootQueryToGfFormConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToGfFormConnectionKeySpecifier
      | (() => undefined | RootQueryToGfFormConnectionKeySpecifier);
    fields?: RootQueryToGfFormConnectionFieldPolicy;
  };
  RootQueryToGfFormConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToGfFormConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToGfFormConnectionEdgeKeySpecifier);
    fields?: RootQueryToGfFormConnectionEdgeFieldPolicy;
  };
  RootQueryToGfSubmittedEntryConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToGfSubmittedEntryConnectionKeySpecifier
      | (() => undefined | RootQueryToGfSubmittedEntryConnectionKeySpecifier);
    fields?: RootQueryToGfSubmittedEntryConnectionFieldPolicy;
  };
  RootQueryToGfSubmittedEntryConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToGfSubmittedEntryConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | RootQueryToGfSubmittedEntryConnectionEdgeKeySpecifier);
    fields?: RootQueryToGfSubmittedEntryConnectionEdgeFieldPolicy;
  };
  RootQueryToMediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToMediaItemConnectionKeySpecifier
      | (() => undefined | RootQueryToMediaItemConnectionKeySpecifier);
    fields?: RootQueryToMediaItemConnectionFieldPolicy;
  };
  RootQueryToMediaItemConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToMediaItemConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToMediaItemConnectionEdgeKeySpecifier);
    fields?: RootQueryToMediaItemConnectionEdgeFieldPolicy;
  };
  RootQueryToMenuConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToMenuConnectionKeySpecifier
      | (() => undefined | RootQueryToMenuConnectionKeySpecifier);
    fields?: RootQueryToMenuConnectionFieldPolicy;
  };
  RootQueryToMenuConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToMenuConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToMenuConnectionEdgeKeySpecifier);
    fields?: RootQueryToMenuConnectionEdgeFieldPolicy;
  };
  RootQueryToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToMenuItemConnectionKeySpecifier
      | (() => undefined | RootQueryToMenuItemConnectionKeySpecifier);
    fields?: RootQueryToMenuItemConnectionFieldPolicy;
  };
  RootQueryToMenuItemConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToMenuItemConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToMenuItemConnectionEdgeKeySpecifier);
    fields?: RootQueryToMenuItemConnectionEdgeFieldPolicy;
  };
  RootQueryToPageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPageConnectionKeySpecifier
      | (() => undefined | RootQueryToPageConnectionKeySpecifier);
    fields?: RootQueryToPageConnectionFieldPolicy;
  };
  RootQueryToPageConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPageConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToPageConnectionEdgeKeySpecifier);
    fields?: RootQueryToPageConnectionEdgeFieldPolicy;
  };
  RootQueryToPluginConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPluginConnectionKeySpecifier
      | (() => undefined | RootQueryToPluginConnectionKeySpecifier);
    fields?: RootQueryToPluginConnectionFieldPolicy;
  };
  RootQueryToPluginConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPluginConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToPluginConnectionEdgeKeySpecifier);
    fields?: RootQueryToPluginConnectionEdgeFieldPolicy;
  };
  RootQueryToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPostConnectionKeySpecifier
      | (() => undefined | RootQueryToPostConnectionKeySpecifier);
    fields?: RootQueryToPostConnectionFieldPolicy;
  };
  RootQueryToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPostConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToPostConnectionEdgeKeySpecifier);
    fields?: RootQueryToPostConnectionEdgeFieldPolicy;
  };
  RootQueryToPostFormatConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToPostFormatConnectionKeySpecifier
      | (() => undefined | RootQueryToPostFormatConnectionKeySpecifier);
    fields?: RootQueryToPostFormatConnectionFieldPolicy;
  };
  RootQueryToPostFormatConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToPostFormatConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToPostFormatConnectionEdgeKeySpecifier);
    fields?: RootQueryToPostFormatConnectionEdgeFieldPolicy;
  };
  RootQueryToTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToTagConnectionKeySpecifier
      | (() => undefined | RootQueryToTagConnectionKeySpecifier);
    fields?: RootQueryToTagConnectionFieldPolicy;
  };
  RootQueryToTagConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToTagConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToTagConnectionEdgeKeySpecifier);
    fields?: RootQueryToTagConnectionEdgeFieldPolicy;
  };
  RootQueryToTaxonomyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToTaxonomyConnectionKeySpecifier
      | (() => undefined | RootQueryToTaxonomyConnectionKeySpecifier);
    fields?: RootQueryToTaxonomyConnectionFieldPolicy;
  };
  RootQueryToTaxonomyConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToTaxonomyConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToTaxonomyConnectionEdgeKeySpecifier);
    fields?: RootQueryToTaxonomyConnectionEdgeFieldPolicy;
  };
  RootQueryToTermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToTermNodeConnectionKeySpecifier
      | (() => undefined | RootQueryToTermNodeConnectionKeySpecifier);
    fields?: RootQueryToTermNodeConnectionFieldPolicy;
  };
  RootQueryToTermNodeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToTermNodeConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToTermNodeConnectionEdgeKeySpecifier);
    fields?: RootQueryToTermNodeConnectionEdgeFieldPolicy;
  };
  RootQueryToThemeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToThemeConnectionKeySpecifier
      | (() => undefined | RootQueryToThemeConnectionKeySpecifier);
    fields?: RootQueryToThemeConnectionFieldPolicy;
  };
  RootQueryToThemeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToThemeConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToThemeConnectionEdgeKeySpecifier);
    fields?: RootQueryToThemeConnectionEdgeFieldPolicy;
  };
  RootQueryToUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToUserConnectionKeySpecifier
      | (() => undefined | RootQueryToUserConnectionKeySpecifier);
    fields?: RootQueryToUserConnectionFieldPolicy;
  };
  RootQueryToUserConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToUserConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToUserConnectionEdgeKeySpecifier);
    fields?: RootQueryToUserConnectionEdgeFieldPolicy;
  };
  RootQueryToUserRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | RootQueryToUserRoleConnectionKeySpecifier
      | (() => undefined | RootQueryToUserRoleConnectionKeySpecifier);
    fields?: RootQueryToUserRoleConnectionFieldPolicy;
  };
  RootQueryToUserRoleConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | RootQueryToUserRoleConnectionEdgeKeySpecifier
      | (() => undefined | RootQueryToUserRoleConnectionEdgeKeySpecifier);
    fields?: RootQueryToUserRoleConnectionEdgeFieldPolicy;
  };
  SEOBreadcrumbs?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOBreadcrumbsKeySpecifier
      | (() => undefined | SEOBreadcrumbsKeySpecifier);
    fields?: SEOBreadcrumbsFieldPolicy;
  };
  SEOConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOConfigKeySpecifier
      | (() => undefined | SEOConfigKeySpecifier);
    fields?: SEOConfigFieldPolicy;
  };
  SEOContentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOContentTypeKeySpecifier
      | (() => undefined | SEOContentTypeKeySpecifier);
    fields?: SEOContentTypeFieldPolicy;
  };
  SEOContentTypeArchive?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOContentTypeArchiveKeySpecifier
      | (() => undefined | SEOContentTypeArchiveKeySpecifier);
    fields?: SEOContentTypeArchiveFieldPolicy;
  };
  SEOContentTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOContentTypesKeySpecifier
      | (() => undefined | SEOContentTypesKeySpecifier);
    fields?: SEOContentTypesFieldPolicy;
  };
  SEOOpenGraph?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOOpenGraphKeySpecifier
      | (() => undefined | SEOOpenGraphKeySpecifier);
    fields?: SEOOpenGraphFieldPolicy;
  };
  SEOOpenGraphFrontPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOOpenGraphFrontPageKeySpecifier
      | (() => undefined | SEOOpenGraphFrontPageKeySpecifier);
    fields?: SEOOpenGraphFrontPageFieldPolicy;
  };
  SEOPageInfoSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOPageInfoSchemaKeySpecifier
      | (() => undefined | SEOPageInfoSchemaKeySpecifier);
    fields?: SEOPageInfoSchemaFieldPolicy;
  };
  SEOPostTypeBreadcrumbs?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOPostTypeBreadcrumbsKeySpecifier
      | (() => undefined | SEOPostTypeBreadcrumbsKeySpecifier);
    fields?: SEOPostTypeBreadcrumbsFieldPolicy;
  };
  SEOPostTypePageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOPostTypePageInfoKeySpecifier
      | (() => undefined | SEOPostTypePageInfoKeySpecifier);
    fields?: SEOPostTypePageInfoFieldPolicy;
  };
  SEOPostTypeSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOPostTypeSchemaKeySpecifier
      | (() => undefined | SEOPostTypeSchemaKeySpecifier);
    fields?: SEOPostTypeSchemaFieldPolicy;
  };
  SEORedirect?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEORedirectKeySpecifier
      | (() => undefined | SEORedirectKeySpecifier);
    fields?: SEORedirectFieldPolicy;
  };
  SEOSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSchemaKeySpecifier
      | (() => undefined | SEOSchemaKeySpecifier);
    fields?: SEOSchemaFieldPolicy;
  };
  SEOSocial?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialKeySpecifier
      | (() => undefined | SEOSocialKeySpecifier);
    fields?: SEOSocialFieldPolicy;
  };
  SEOSocialFacebook?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialFacebookKeySpecifier
      | (() => undefined | SEOSocialFacebookKeySpecifier);
    fields?: SEOSocialFacebookFieldPolicy;
  };
  SEOSocialInstagram?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialInstagramKeySpecifier
      | (() => undefined | SEOSocialInstagramKeySpecifier);
    fields?: SEOSocialInstagramFieldPolicy;
  };
  SEOSocialLinkedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialLinkedInKeySpecifier
      | (() => undefined | SEOSocialLinkedInKeySpecifier);
    fields?: SEOSocialLinkedInFieldPolicy;
  };
  SEOSocialMySpace?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialMySpaceKeySpecifier
      | (() => undefined | SEOSocialMySpaceKeySpecifier);
    fields?: SEOSocialMySpaceFieldPolicy;
  };
  SEOSocialPinterest?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialPinterestKeySpecifier
      | (() => undefined | SEOSocialPinterestKeySpecifier);
    fields?: SEOSocialPinterestFieldPolicy;
  };
  SEOSocialTwitter?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialTwitterKeySpecifier
      | (() => undefined | SEOSocialTwitterKeySpecifier);
    fields?: SEOSocialTwitterFieldPolicy;
  };
  SEOSocialWikipedia?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialWikipediaKeySpecifier
      | (() => undefined | SEOSocialWikipediaKeySpecifier);
    fields?: SEOSocialWikipediaFieldPolicy;
  };
  SEOSocialYoutube?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOSocialYoutubeKeySpecifier
      | (() => undefined | SEOSocialYoutubeKeySpecifier);
    fields?: SEOSocialYoutubeFieldPolicy;
  };
  SEOTaxonomySchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOTaxonomySchemaKeySpecifier
      | (() => undefined | SEOTaxonomySchemaKeySpecifier);
    fields?: SEOTaxonomySchemaFieldPolicy;
  };
  SEOUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOUserKeySpecifier
      | (() => undefined | SEOUserKeySpecifier);
    fields?: SEOUserFieldPolicy;
  };
  SEOUserSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOUserSchemaKeySpecifier
      | (() => undefined | SEOUserSchemaKeySpecifier);
    fields?: SEOUserSchemaFieldPolicy;
  };
  SEOUserSocial?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOUserSocialKeySpecifier
      | (() => undefined | SEOUserSocialKeySpecifier);
    fields?: SEOUserSocialFieldPolicy;
  };
  SEOWebmaster?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SEOWebmasterKeySpecifier
      | (() => undefined | SEOWebmasterKeySpecifier);
    fields?: SEOWebmasterFieldPolicy;
  };
  SectionField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SectionFieldKeySpecifier
      | (() => undefined | SectionFieldKeySpecifier);
    fields?: SectionFieldFieldPolicy;
  };
  SelectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SelectFieldKeySpecifier
      | (() => undefined | SelectFieldKeySpecifier);
    fields?: SelectFieldFieldPolicy;
  };
  SelectFieldChoice?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SelectFieldChoiceKeySpecifier
      | (() => undefined | SelectFieldChoiceKeySpecifier);
    fields?: SelectFieldChoiceFieldPolicy;
  };
  SendPasswordResetEmailPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SendPasswordResetEmailPayloadKeySpecifier
      | (() => undefined | SendPasswordResetEmailPayloadKeySpecifier);
    fields?: SendPasswordResetEmailPayloadFieldPolicy;
  };
  Settings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SettingsKeySpecifier
      | (() => undefined | SettingsKeySpecifier);
    fields?: SettingsFieldPolicy;
  };
  SubmitGfDraftEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SubmitGfDraftEntryPayloadKeySpecifier
      | (() => undefined | SubmitGfDraftEntryPayloadKeySpecifier);
    fields?: SubmitGfDraftEntryPayloadFieldPolicy;
  };
  SubmitGfFormPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SubmitGfFormPayloadKeySpecifier
      | (() => undefined | SubmitGfFormPayloadKeySpecifier);
    fields?: SubmitGfFormPayloadFieldPolicy;
  };
  SurveyField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | SurveyFieldKeySpecifier
      | (() => undefined | SurveyFieldKeySpecifier);
    fields?: SurveyFieldFieldPolicy;
  };
  Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier);
    fields?: TagFieldPolicy;
  };
  TagToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TagToContentNodeConnectionKeySpecifier
      | (() => undefined | TagToContentNodeConnectionKeySpecifier);
    fields?: TagToContentNodeConnectionFieldPolicy;
  };
  TagToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TagToContentNodeConnectionEdgeKeySpecifier
      | (() => undefined | TagToContentNodeConnectionEdgeKeySpecifier);
    fields?: TagToContentNodeConnectionEdgeFieldPolicy;
  };
  TagToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TagToPostConnectionKeySpecifier
      | (() => undefined | TagToPostConnectionKeySpecifier);
    fields?: TagToPostConnectionFieldPolicy;
  };
  TagToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TagToPostConnectionEdgeKeySpecifier
      | (() => undefined | TagToPostConnectionEdgeKeySpecifier);
    fields?: TagToPostConnectionEdgeFieldPolicy;
  };
  TagToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TagToTaxonomyConnectionEdgeKeySpecifier
      | (() => undefined | TagToTaxonomyConnectionEdgeKeySpecifier);
    fields?: TagToTaxonomyConnectionEdgeFieldPolicy;
  };
  Taxonomy?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TaxonomyKeySpecifier
      | (() => undefined | TaxonomyKeySpecifier);
    fields?: TaxonomyFieldPolicy;
  };
  TaxonomySEO?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TaxonomySEOKeySpecifier
      | (() => undefined | TaxonomySEOKeySpecifier);
    fields?: TaxonomySEOFieldPolicy;
  };
  TaxonomyToContentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TaxonomyToContentTypeConnectionKeySpecifier
      | (() => undefined | TaxonomyToContentTypeConnectionKeySpecifier);
    fields?: TaxonomyToContentTypeConnectionFieldPolicy;
  };
  TaxonomyToContentTypeConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | TaxonomyToContentTypeConnectionEdgeKeySpecifier
      | (() => undefined | TaxonomyToContentTypeConnectionEdgeKeySpecifier);
    fields?: TaxonomyToContentTypeConnectionEdgeFieldPolicy;
  };
  Template_FullWidth?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | Template_FullWidthKeySpecifier
      | (() => undefined | Template_FullWidthKeySpecifier);
    fields?: Template_FullWidthFieldPolicy;
  };
  TermNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TermNodeKeySpecifier
      | (() => undefined | TermNodeKeySpecifier);
    fields?: TermNodeFieldPolicy;
  };
  TermNodeToEnqueuedScriptConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | TermNodeToEnqueuedScriptConnectionKeySpecifier
      | (() => undefined | TermNodeToEnqueuedScriptConnectionKeySpecifier);
    fields?: TermNodeToEnqueuedScriptConnectionFieldPolicy;
  };
  TermNodeToEnqueuedScriptConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier
      | (() => undefined | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier);
    fields?: TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy;
  };
  TermNodeToEnqueuedStylesheetConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | TermNodeToEnqueuedStylesheetConnectionKeySpecifier
      | (() => undefined | TermNodeToEnqueuedStylesheetConnectionKeySpecifier);
    fields?: TermNodeToEnqueuedStylesheetConnectionFieldPolicy;
  };
  TermNodeToEnqueuedStylesheetConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier);
    fields?: TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy;
  };
  TextAreaField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TextAreaFieldKeySpecifier
      | (() => undefined | TextAreaFieldKeySpecifier);
    fields?: TextAreaFieldFieldPolicy;
  };
  TextField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TextFieldKeySpecifier
      | (() => undefined | TextFieldKeySpecifier);
    fields?: TextFieldFieldPolicy;
  };
  Theme?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | ThemeKeySpecifier
      | (() => undefined | ThemeKeySpecifier);
    fields?: ThemeFieldPolicy;
  };
  TimeField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TimeFieldKeySpecifier
      | (() => undefined | TimeFieldKeySpecifier);
    fields?: TimeFieldFieldPolicy;
  };
  TimeFieldValue?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TimeFieldValueKeySpecifier
      | (() => undefined | TimeFieldValueKeySpecifier);
    fields?: TimeFieldValueFieldPolicy;
  };
  TimeInputProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TimeInputPropertyKeySpecifier
      | (() => undefined | TimeInputPropertyKeySpecifier);
    fields?: TimeInputPropertyFieldPolicy;
  };
  UniformResourceIdentifiable?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UniformResourceIdentifiableKeySpecifier
      | (() => undefined | UniformResourceIdentifiableKeySpecifier);
    fields?: UniformResourceIdentifiableFieldPolicy;
  };
  UpdateCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateCategoryPayloadKeySpecifier
      | (() => undefined | UpdateCategoryPayloadKeySpecifier);
    fields?: UpdateCategoryPayloadFieldPolicy;
  };
  UpdateCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateCommentPayloadKeySpecifier
      | (() => undefined | UpdateCommentPayloadKeySpecifier);
    fields?: UpdateCommentPayloadFieldPolicy;
  };
  UpdateGfDraftEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateGfDraftEntryPayloadKeySpecifier
      | (() => undefined | UpdateGfDraftEntryPayloadKeySpecifier);
    fields?: UpdateGfDraftEntryPayloadFieldPolicy;
  };
  UpdateGfEntryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateGfEntryPayloadKeySpecifier
      | (() => undefined | UpdateGfEntryPayloadKeySpecifier);
    fields?: UpdateGfEntryPayloadFieldPolicy;
  };
  UpdateMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateMediaItemPayloadKeySpecifier
      | (() => undefined | UpdateMediaItemPayloadKeySpecifier);
    fields?: UpdateMediaItemPayloadFieldPolicy;
  };
  UpdatePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdatePagePayloadKeySpecifier
      | (() => undefined | UpdatePagePayloadKeySpecifier);
    fields?: UpdatePagePayloadFieldPolicy;
  };
  UpdatePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdatePostFormatPayloadKeySpecifier
      | (() => undefined | UpdatePostFormatPayloadKeySpecifier);
    fields?: UpdatePostFormatPayloadFieldPolicy;
  };
  UpdatePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdatePostPayloadKeySpecifier
      | (() => undefined | UpdatePostPayloadKeySpecifier);
    fields?: UpdatePostPayloadFieldPolicy;
  };
  UpdateSettingsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateSettingsPayloadKeySpecifier
      | (() => undefined | UpdateSettingsPayloadKeySpecifier);
    fields?: UpdateSettingsPayloadFieldPolicy;
  };
  UpdateTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateTagPayloadKeySpecifier
      | (() => undefined | UpdateTagPayloadKeySpecifier);
    fields?: UpdateTagPayloadFieldPolicy;
  };
  UpdateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UpdateUserPayloadKeySpecifier
      | (() => undefined | UpdateUserPayloadKeySpecifier);
    fields?: UpdateUserPayloadFieldPolicy;
  };
  User?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserRoleKeySpecifier
      | (() => undefined | UserRoleKeySpecifier);
    fields?: UserRoleFieldPolicy;
  };
  UserToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToCommentConnectionKeySpecifier
      | (() => undefined | UserToCommentConnectionKeySpecifier);
    fields?: UserToCommentConnectionFieldPolicy;
  };
  UserToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToCommentConnectionEdgeKeySpecifier
      | (() => undefined | UserToCommentConnectionEdgeKeySpecifier);
    fields?: UserToCommentConnectionEdgeFieldPolicy;
  };
  UserToContentRevisionUnionConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserToContentRevisionUnionConnectionKeySpecifier
      | (() => undefined | UserToContentRevisionUnionConnectionKeySpecifier);
    fields?: UserToContentRevisionUnionConnectionFieldPolicy;
  };
  UserToContentRevisionUnionConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserToContentRevisionUnionConnectionEdgeKeySpecifier
      | (() =>
          | undefined
          | UserToContentRevisionUnionConnectionEdgeKeySpecifier);
    fields?: UserToContentRevisionUnionConnectionEdgeFieldPolicy;
  };
  UserToEnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToEnqueuedScriptConnectionKeySpecifier
      | (() => undefined | UserToEnqueuedScriptConnectionKeySpecifier);
    fields?: UserToEnqueuedScriptConnectionFieldPolicy;
  };
  UserToEnqueuedScriptConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserToEnqueuedScriptConnectionEdgeKeySpecifier
      | (() => undefined | UserToEnqueuedScriptConnectionEdgeKeySpecifier);
    fields?: UserToEnqueuedScriptConnectionEdgeFieldPolicy;
  };
  UserToEnqueuedStylesheetConnection?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserToEnqueuedStylesheetConnectionKeySpecifier
      | (() => undefined | UserToEnqueuedStylesheetConnectionKeySpecifier);
    fields?: UserToEnqueuedStylesheetConnectionFieldPolicy;
  };
  UserToEnqueuedStylesheetConnectionEdge?: Omit<
    TypePolicy,
    "fields" | "keyFields"
  > & {
    keyFields?:
      | false
      | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier
      | (() => undefined | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier);
    fields?: UserToEnqueuedStylesheetConnectionEdgeFieldPolicy;
  };
  UserToMediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToMediaItemConnectionKeySpecifier
      | (() => undefined | UserToMediaItemConnectionKeySpecifier);
    fields?: UserToMediaItemConnectionFieldPolicy;
  };
  UserToMediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToMediaItemConnectionEdgeKeySpecifier
      | (() => undefined | UserToMediaItemConnectionEdgeKeySpecifier);
    fields?: UserToMediaItemConnectionEdgeFieldPolicy;
  };
  UserToPageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToPageConnectionKeySpecifier
      | (() => undefined | UserToPageConnectionKeySpecifier);
    fields?: UserToPageConnectionFieldPolicy;
  };
  UserToPageConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToPageConnectionEdgeKeySpecifier
      | (() => undefined | UserToPageConnectionEdgeKeySpecifier);
    fields?: UserToPageConnectionEdgeFieldPolicy;
  };
  UserToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToPostConnectionKeySpecifier
      | (() => undefined | UserToPostConnectionKeySpecifier);
    fields?: UserToPostConnectionFieldPolicy;
  };
  UserToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToPostConnectionEdgeKeySpecifier
      | (() => undefined | UserToPostConnectionEdgeKeySpecifier);
    fields?: UserToPostConnectionEdgeFieldPolicy;
  };
  UserToUserRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToUserRoleConnectionKeySpecifier
      | (() => undefined | UserToUserRoleConnectionKeySpecifier);
    fields?: UserToUserRoleConnectionFieldPolicy;
  };
  UserToUserRoleConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UserToUserRoleConnectionEdgeKeySpecifier
      | (() => undefined | UserToUserRoleConnectionEdgeKeySpecifier);
    fields?: UserToUserRoleConnectionEdgeFieldPolicy;
  };
  UsernameField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | UsernameFieldKeySpecifier
      | (() => undefined | UsernameFieldKeySpecifier);
    fields?: UsernameFieldFieldPolicy;
  };
  WPPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | WPPageInfoKeySpecifier
      | (() => undefined | WPPageInfoKeySpecifier);
    fields?: WPPageInfoFieldPolicy;
  };
  WebsiteField?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | WebsiteFieldKeySpecifier
      | (() => undefined | WebsiteFieldKeySpecifier);
    fields?: WebsiteFieldFieldPolicy;
  };
  WritingSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | WritingSettingsKeySpecifier
      | (() => undefined | WritingSettingsKeySpecifier);
    fields?: WritingSettingsFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
