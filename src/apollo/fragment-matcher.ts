export type PossibleTypesResultData = {
  possibleTypes: {
    Commenter: ["CommentAuthor", "User"];
    ContentNode: ["MediaItem", "Page", "Post"];
    ContentRevisionUnion: ["Page", "Post"];
    ContentTemplate: ["DefaultTemplate", "Template_FullWidth"];
    DatabaseIdentifier: [
      "Category",
      "Comment",
      "GfForm",
      "GfSubmittedEntry",
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
      "CheckboxField",
      "ConsentField",
      "DateField",
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
    MenuItemLinkable: ["Category", "Page", "Post", "Tag"];
    MenuItemObjectUnion: ["Category", "Page", "Post", "Tag"];
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
    NodeWithAuthor: ["MediaItem", "Page", "Post"];
    NodeWithComments: ["MediaItem", "Page", "Post"];
    NodeWithContentEditor: ["Page", "Post"];
    NodeWithExcerpt: ["Page", "Post"];
    NodeWithFeaturedImage: ["Page", "Post"];
    NodeWithForm: ["GfDraftEntry", "GfSubmittedEntry"];
    NodeWithPageAttributes: ["Page"];
    NodeWithRevisions: ["Page", "Post"];
    NodeWithTemplate: ["MediaItem", "Page", "Post"];
    NodeWithTitle: ["MediaItem", "Page", "Post"];
    NodeWithTrackbacks: ["Post"];
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
    ContentNode: ["MediaItem", "Page", "Post"],
    ContentRevisionUnion: ["Page", "Post"],
    ContentTemplate: ["DefaultTemplate", "Template_FullWidth"],
    DatabaseIdentifier: [
      "Category",
      "Comment",
      "GfForm",
      "GfSubmittedEntry",
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
      "CheckboxField",
      "ConsentField",
      "DateField",
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
    MenuItemLinkable: ["Category", "Page", "Post", "Tag"],
    MenuItemObjectUnion: ["Category", "Page", "Post", "Tag"],
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
    NodeWithAuthor: ["MediaItem", "Page", "Post"],
    NodeWithComments: ["MediaItem", "Page", "Post"],
    NodeWithContentEditor: ["Page", "Post"],
    NodeWithExcerpt: ["Page", "Post"],
    NodeWithFeaturedImage: ["Page", "Post"],
    NodeWithForm: ["GfDraftEntry", "GfSubmittedEntry"],
    NodeWithPageAttributes: ["Page"],
    NodeWithRevisions: ["Page", "Post"],
    NodeWithTemplate: ["MediaItem", "Page", "Post"],
    NodeWithTitle: ["MediaItem", "Page", "Post"],
    NodeWithTrackbacks: ["Post"],
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
