export type PossibleTypesResultData = {
  possibleTypes: {
    Commenter: ["CommentAuthor", "User"];
    ContentNode: ["Gform", "MediaItem", "Page", "Post"];
    ContentRevisionUnion: ["Gform", "Page", "Post"];
    ContentTemplate: ["DefaultTemplate", "Template_FullWidth"];
    DatabaseIdentifier: [
      "Category",
      "Comment",
      "GfForm",
      "GfSubmittedEntry",
      "Gform",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Post",
      "PostFormat",
      "Tag",
      "User"
    ];
    EnqueuedAsset: ["EnqueuedScript", "EnqueuedStylesheet"];
    FormField: [
      "AddressField",
      "CaptchaField",
      "ChainedSelectField",
      "CheckboxField",
      "ConsentField",
      "DateField",
      "DropboxField",
      "EmailField",
      "FileUploadField",
      "HiddenField",
      "HtmlField",
      "LikertField",
      "ListField",
      "MultiSelectField",
      "NameField",
      "NumberField",
      "PageField",
      "PasswordField",
      "PhoneField",
      "PollField",
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField",
      "PostContentField",
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField",
      "PostExcerptField",
      "PostImageField",
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField",
      "PostTitleField",
      "QuizCheckboxField",
      "QuizRadioField",
      "QuizSelectField",
      "RadioField",
      "RankField",
      "RatingField",
      "RecaptchaField",
      "RememberMeField",
      "SectionField",
      "SelectField",
      "SurveyField",
      "TextAreaField",
      "TextField",
      "TimeField",
      "UsernameField",
      "WebsiteField"
    ];
    GfEntry: ["GfDraftEntry", "GfSubmittedEntry"];
    HierarchicalContentNode: ["MediaItem", "Page"];
    HierarchicalTermNode: ["Category"];
    MenuItemLinkable: ["Category", "Gform", "Page", "Post", "Tag"];
    MenuItemObjectUnion: ["Category", "Gform", "Page", "Post", "Tag"];
    Node: [
      "Category",
      "Comment",
      "CommentAuthor",
      "ContentType",
      "EnqueuedScript",
      "EnqueuedStylesheet",
      "GfDraftEntry",
      "GfForm",
      "GfSubmittedEntry",
      "Gform",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Plugin",
      "Post",
      "PostFormat",
      "Tag",
      "Taxonomy",
      "Theme",
      "User",
      "UserRole"
    ];
    NodeWithAuthor: ["Gform", "MediaItem", "Page", "Post"];
    NodeWithComments: ["Gform", "MediaItem", "Page", "Post"];
    NodeWithContentEditor: ["Gform", "Page", "Post"];
    NodeWithExcerpt: ["Gform", "Page", "Post"];
    NodeWithFeaturedImage: ["Gform", "Page", "Post"];
    NodeWithForm: ["GfDraftEntry", "GfSubmittedEntry"];
    NodeWithPageAttributes: ["Page"];
    NodeWithRevisions: ["Gform", "Page", "Post"];
    NodeWithTemplate: ["Gform", "MediaItem", "Page", "Post"];
    NodeWithTitle: ["Gform", "MediaItem", "Page", "Post"];
    NodeWithTrackbacks: ["Gform", "Post"];
    PostCategoryField: [
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField"
    ];
    PostCustomField: [
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField"
    ];
    PostTagsField: [
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField"
    ];
    QuizField: ["QuizCheckboxField", "QuizRadioField", "QuizSelectField"];
    TermNode: ["Category", "PostFormat", "Tag"];
    UniformResourceIdentifiable: [
      "Category",
      "ContentType",
      "Gform",
      "MediaItem",
      "Page",
      "Post",
      "PostFormat",
      "Tag",
      "User"
    ];
  };
};
const result: PossibleTypesResultData = {
  possibleTypes: {
    Commenter: ["CommentAuthor", "User"],
    ContentNode: ["Gform", "MediaItem", "Page", "Post"],
    ContentRevisionUnion: ["Gform", "Page", "Post"],
    ContentTemplate: ["DefaultTemplate", "Template_FullWidth"],
    DatabaseIdentifier: [
      "Category",
      "Comment",
      "GfForm",
      "GfSubmittedEntry",
      "Gform",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Post",
      "PostFormat",
      "Tag",
      "User"
    ],
    EnqueuedAsset: ["EnqueuedScript", "EnqueuedStylesheet"],
    FormField: [
      "AddressField",
      "CaptchaField",
      "ChainedSelectField",
      "CheckboxField",
      "ConsentField",
      "DateField",
      "DropboxField",
      "EmailField",
      "FileUploadField",
      "HiddenField",
      "HtmlField",
      "LikertField",
      "ListField",
      "MultiSelectField",
      "NameField",
      "NumberField",
      "PageField",
      "PasswordField",
      "PhoneField",
      "PollField",
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField",
      "PostContentField",
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField",
      "PostExcerptField",
      "PostImageField",
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField",
      "PostTitleField",
      "QuizCheckboxField",
      "QuizRadioField",
      "QuizSelectField",
      "RadioField",
      "RankField",
      "RatingField",
      "RecaptchaField",
      "RememberMeField",
      "SectionField",
      "SelectField",
      "SurveyField",
      "TextAreaField",
      "TextField",
      "TimeField",
      "UsernameField",
      "WebsiteField"
    ],
    GfEntry: ["GfDraftEntry", "GfSubmittedEntry"],
    HierarchicalContentNode: ["MediaItem", "Page"],
    HierarchicalTermNode: ["Category"],
    MenuItemLinkable: ["Category", "Gform", "Page", "Post", "Tag"],
    MenuItemObjectUnion: ["Category", "Gform", "Page", "Post", "Tag"],
    Node: [
      "Category",
      "Comment",
      "CommentAuthor",
      "ContentType",
      "EnqueuedScript",
      "EnqueuedStylesheet",
      "GfDraftEntry",
      "GfForm",
      "GfSubmittedEntry",
      "Gform",
      "MediaItem",
      "Menu",
      "MenuItem",
      "Page",
      "Plugin",
      "Post",
      "PostFormat",
      "Tag",
      "Taxonomy",
      "Theme",
      "User",
      "UserRole"
    ],
    NodeWithAuthor: ["Gform", "MediaItem", "Page", "Post"],
    NodeWithComments: ["Gform", "MediaItem", "Page", "Post"],
    NodeWithContentEditor: ["Gform", "Page", "Post"],
    NodeWithExcerpt: ["Gform", "Page", "Post"],
    NodeWithFeaturedImage: ["Gform", "Page", "Post"],
    NodeWithForm: ["GfDraftEntry", "GfSubmittedEntry"],
    NodeWithPageAttributes: ["Page"],
    NodeWithRevisions: ["Gform", "Page", "Post"],
    NodeWithTemplate: ["Gform", "MediaItem", "Page", "Post"],
    NodeWithTitle: ["Gform", "MediaItem", "Page", "Post"],
    NodeWithTrackbacks: ["Gform", "Post"],
    PostCategoryField: [
      "PostCategoryCheckboxField",
      "PostCategoryMultiSelectField",
      "PostCategoryRadioField",
      "PostCategorySelectField"
    ],
    PostCustomField: [
      "PostCustomCheckboxField",
      "PostCustomDateField",
      "PostCustomEmailField",
      "PostCustomFileuploadField",
      "PostCustomHiddenField",
      "PostCustomListField",
      "PostCustomMultiSelectField",
      "PostCustomNumberField",
      "PostCustomPhoneField",
      "PostCustomRadioField",
      "PostCustomSelectField",
      "PostCustomTextAreaField",
      "PostCustomTextField",
      "PostCustomTimeField",
      "PostCustomWebsiteField"
    ],
    PostTagsField: [
      "PostTagsCheckboxField",
      "PostTagsMultiSelectField",
      "PostTagsRadioField",
      "PostTagsSelectField",
      "PostTagsTextField"
    ],
    QuizField: ["QuizCheckboxField", "QuizRadioField", "QuizSelectField"],
    TermNode: ["Category", "PostFormat", "Tag"],
    UniformResourceIdentifiable: [
      "Category",
      "ContentType",
      "Gform",
      "MediaItem",
      "Page",
      "Post",
      "PostFormat",
      "Tag",
      "User"
    ]
  }
};
export default result;
