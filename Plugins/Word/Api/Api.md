# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AcceptReviewChanges](./Methods/AcceptReviewChanges.md) | None | Accepts review changes. |
| [AddAddinField](./Methods/AddAddinField.md) | None | Creates a new addin field with the data specified in the request. |
| [AddComment](./Methods/AddComment.md) | string \| null | Adds a comment to the document. |
| [AddContentControl](./Methods/AddContentControl.md) | [ContentControl](../Enumeration/ContentControl.md) | Adds an empty content control to the document. |
| [AddContentControlCheckBox](./Methods/AddContentControlCheckBox.md) | None | Adds an empty content control checkbox to the document. |
| [AddContentControlDatePicker](./Methods/AddContentControlDatePicker.md) | None | Adds an empty content control datepicker to the document. |
| [AddContentControlList](./Methods/AddContentControlList.md) | None | Adds an empty content control list to the document. |
| [AddContentControlPicture](./Methods/AddContentControlPicture.md) | None | Adds an empty content control picture to the document. |
| [AddOleObject](./Methods/AddOleObject.md) | None | Adds an OLE object to the current document position. |
| [CanRedo](./Methods/CanRedo.md) | boolean | Checks if it possible to revert the user's last undone action. |
| [CanUndo](./Methods/CanUndo.md) | boolean | Checks if it is possible to undo the user's last action. |
| [ChangeComment](./Methods/ChangeComment.md) | None | Changes the specified comment. |
| [ChangeOleObject](./Methods/ChangeOleObject.md) | None | Changes the OLE object with the *InternalId* specified in OLE object data. |
| [ChangeOleObjects](./Methods/ChangeOleObjects.md) | None | Changes multiple OLE objects with the *InternalIds* specified in OLE object data. |
| [CoAuthoringChatSendMessage](./Methods/CoAuthoringChatSendMessage.md) | None | Sends a message to the co-authoring chat. |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [EditOleObject](./Methods/EditOleObject.md) | None | Edits an OLE object in the document. |
| [EndAction](./Methods/EndAction.md) | None | Specifies the end action for long operations. |
| [GetAllAddinFields](./Methods/GetAllAddinFields.md) | [AddinFieldData](../Enumeration/AddinFieldData.md)[] | Returns all addin fields from the current document. |
| [GetAllComments](./Methods/GetAllComments.md) | [comment](../Enumeration/comment.md)[] | Returns all the comments from the document. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the content controls that have been added to the page. |
| [GetAllForms](./Methods/GetAllForms.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the forms that have been added to the document. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [OLEObjectData](../Enumeration/OLEObjectData.md)[] | Returns all OLE object data for objects which can be opened by the specified plugin.\nIf *sPluginId* is not defined, this method returns all OLE objects contained in the currrent document. |
| [GetCurrentContentControl](./Methods/GetCurrentContentControl.md) | string | Returns an identifier of the selected content control (i.e. the content control where the mouse cursor is currently positioned). |
| [GetCurrentContentControlPr](./Methods/GetCurrentContentControlPr.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md) | Returns the current content control properties. |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | Returns the current sentence. |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | Returns the current word. |
| [GetDocumentLang](./Methods/GetDocumentLang.md) | string | Returns the document language. |
| [GetFields](./Methods/GetFields.md) | string[] | Returns all fields as a text. |
| [GetFileHTML](./Methods/GetFileHTML.md) | string | Returns file content in the HTML format. |
| [GetFileToDownload](./Methods/GetFileToDownload.md) | string | Returns the current file to download in the specified format. |
| [GetFontList](./Methods/GetFontList.md) | [FontInfo](../Enumeration/FontInfo.md)[] | Returns the fonts list. |
| [GetFormValue](./Methods/GetFormValue.md) | null \| string \| boolean | Returns a value of the specified form. |
| [GetFormsByTag](./Methods/GetFormsByTag.md) | [ContentControl](../Enumeration/ContentControl.md)[] | Returns information about all the forms that have been added to the document with specified tag. |
| [GetImageDataFromSelection](./Methods/GetImageDataFromSelection.md) | [ImageData](../Enumeration/ImageData.md) | Returns the image data from the first of the selected drawings. If there are no drawings selected, the method returns a white rectangle. |
| [GetInstalledPlugins](./Methods/GetInstalledPlugins.md) | [PluginData](../Enumeration/PluginData.md)[] | Returns all the installed plugins. |
| [GetMacros](./Methods/GetMacros.md) | [Macros](../Enumeration/Macros.md) | Returns the document macros. |
| [GetSelectedContent](./Methods/GetSelectedContent.md) | string | Returns the selected content in the specified format. |
| [GetSelectedOleObjects](./Methods/GetSelectedOleObjects.md) | [OLEProperties](../Enumeration/OLEProperties.md)[] | Returns an array of the selected OLE objects. |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | Returns the selected text from the document. |
| [GetSelectionType](./Methods/GetSelectionType.md) | [SelectionType](../Enumeration/SelectionType.md) | Returns the type of the current selection. |
| [GetVBAMacros](./Methods/GetVBAMacros.md) | string \| null | Returns all VBA macros from the document. |
| [GetVersion](./Methods/GetVersion.md) | string | Returns the editor version. |
| [InputText](./Methods/InputText.md) | None | Inserts text into the document. |
| [InsertAndReplaceContentControls](./Methods/InsertAndReplaceContentControls.md) | [ContentControlProperties](../Enumeration/ContentControlProperties.md)[] | Inserts the content control containing data. The data is specified by the JS code for [Document](https://api.onlyoffice.com/docs/office-api/usage-api/text-document-api/), or by a link to the shared document. |
| [InsertOleObject](./Methods/InsertOleObject.md) | None | Inserts the OLE object at the current document position. |
| [InstallPlugin](./Methods/InstallPlugin.md) | object | Installs a plugin using the specified plugin config. |
| [MouseMoveWindow](./Methods/MouseMoveWindow.md) | None | Sends an event to the plugin when the mouse button is moved inside the plugin iframe. |
| [MouseUpWindow](./Methods/MouseUpWindow.md) | None | Sends an event to the plugin when the mouse button is released inside the plugin iframe. |
| [MoveCursorToContentControl](./Methods/MoveCursorToContentControl.md) | None | Moves a cursor to the specified content control. |
| [MoveCursorToEnd](./Methods/MoveCursorToEnd.md) | None | Moves a cursor to the end of the current editing area (document body, footer/header, footnote, or autoshape).\nThis method is similar to pressing the -**Ctrl + End** keyboard shortcut. |
| [MoveCursorToStart](./Methods/MoveCursorToStart.md) | None | Moves a cursor to the beginning of the current editing area (document body, footer/header, footnote, or autoshape).\nThis method is similar to pressing the -**Ctrl + Home** keyboard shortcut. |
| [MoveToComment](./Methods/MoveToComment.md) | None | Moves a cursor to the specified comment. |
| [MoveToNextReviewChange](./Methods/MoveToNextReviewChange.md) | None | Navigates through the review changes. |
| [OnDropEvent](./Methods/OnDropEvent.md) | None | Implements the external drag&drop emulation. |
| [OnEncryption](./Methods/OnEncryption.md) | None | Encrypts the document. |
| [OpenFile](./Methods/OpenFile.md) | None | Opens a file with fields. |
| [PasteHtml](./Methods/PasteHtml.md) | None | Pastes text in the HTML format into the document. |
| [PasteText](./Methods/PasteText.md) | None | Pastes text into the document. |
| [PutImageDataToSelection](./Methods/PutImageDataToSelection.md) | None | Replaces the first selected drawing with the image specified in the parameters.\nIf there are no drawings selected, the method inserts the image at the current position. |
| [Redo](./Methods/Redo.md) | None | Reverts the user's last undone action. |
| [RejectReviewChanges](./Methods/RejectReviewChanges.md) | None | Rejects review changes. |
| [RemoveComments](./Methods/RemoveComments.md) | None | Removes the specified comments. |
| [RemoveContentControl](./Methods/RemoveContentControl.md) | [ContentControlParentPr](../Enumeration/ContentControlParentPr.md) | Removes the currently selected content control retaining all its contents. The content control where the mouse cursor is currently positioned will be removed. |
| [RemoveContentControls](./Methods/RemoveContentControls.md) | None | Removes several content controls. |
| [RemoveFieldWrapper](./Methods/RemoveFieldWrapper.md) | None | Removes a field wrapper, leaving only the field content. |
| [RemoveOleObject](./Methods/RemoveOleObject.md) | None | Removes the OLE object from the document by its internal ID. |
| [RemoveOleObjects](./Methods/RemoveOleObjects.md) | None | Removes several OLE objects from the document by their internal IDs. |
| [RemovePlugin](./Methods/RemovePlugin.md) | object | Removes a plugin with the specified GUID. |
| [RemoveSelectedContent](./Methods/RemoveSelectedContent.md) | None | Removes the selected content from the document. |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | None | Replaces the current sentence with the specified string. |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | None | Replaces the current word with the specified string. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | None | Finds and replaces the text. |
| [SearchNext](./Methods/SearchNext.md) | boolean | Finds and selects the next occurrence of the text starting at the current position. |
| [SelectContentControl](./Methods/SelectContentControl.md) | None | Selects the specified content control. |
| [SelectOleObject](./Methods/SelectOleObject.md) | None | Selects the specified OLE object. |
| [SetDisplayModeInReview](./Methods/SetDisplayModeInReview.md) | None | Sets the display mode for track changes. |
| [SetEditingRestrictions](./Methods/SetEditingRestrictions.md) | None | Sets the document editing restrictions. |
| [SetFormValue](./Methods/SetFormValue.md) | None | Sets a value to the specified form. |
| [SetMacros](./Methods/SetMacros.md) | None | Sets macros to the document. |
| [SetPluginsOptions](./Methods/SetPluginsOptions.md) | None | Configures plugins from an external source. The settings can be set for all plugins or for a specific plugin.\nFor example, this method can be used to pass an authorization token to the plugin. This method can be used only with the connector class. |
| [SetProperties](./Methods/SetProperties.md) | None | Sets the properties to the document. |
| [ShowButton](./Methods/ShowButton.md) | None | Shows or hides buttons in the header. |
| [ShowError](./Methods/ShowError.md) | None | Shows an error/warning message. |
| [ShowInputHelper](./Methods/ShowInputHelper.md) | None | Shows the input helper. |
| [StartAction](./Methods/StartAction.md) | None | Specifies the start action for long operations. |
| [UnShowInputHelper](./Methods/UnShowInputHelper.md) | None | Unshows the input helper. |
| [Undo](./Methods/Undo.md) | None | Undoes the user's last action. |
| [UpdateAddinFields](./Methods/UpdateAddinFields.md) | None | Updates the addin fields with the specified data. |
| [UpdatePlugin](./Methods/UpdatePlugin.md) | object | Updates a plugin using the specified plugin config. |
