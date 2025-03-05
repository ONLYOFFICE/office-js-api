# ApiBlockLvlSdt

Represents the ApiBlockLvlSdt class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "blockLvlSdt" | Returns a type of the ApiBlockLvlSdt class. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current content control. |
| [SetLock](./Methods/SetLock.md) | None | Sets the lock to the current block text content control: **"contentLocked"** - content cannot be edited. **"sdtContentLocked"** - content cannot be edited and the container cannot be deleted. **"sdtLocked"** - the container cannot be deleted. |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | Returns the lock type of the current container. |
| [SetTag](./Methods/SetTag.md) | None | Sets the tag attribute to the current container. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current container. |
| [SetLabel](./Methods/SetLabel.md) | None | Sets the label attribute to the current container. |
| [GetLabel](./Methods/GetLabel.md) | string | Returns the label attribute for the current container. |
| [SetAlias](./Methods/SetAlias.md) | None | Sets the alias attribute to the current container. |
| [GetAlias](./Methods/GetAlias.md) | string | Returns the alias attribute for the current container. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the content of the current container. |
| [GetAllContentControls](./Methods/GetAllContentControls.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md)[] \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)[] | Returns a collection of content control objects in the current content control. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns a collection of paragraph objects in the current content control. |
| [GetAllTablesOnPage](./Methods/GetAllTablesOnPage.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns a collection of tables on a given absolute page. 💡 This method can be a little bit slow, because it runs the document calculation process to arrange tables on the specified page. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Clears the contents from the current content control. |
| [Delete](./Methods/Delete.md) | boolean | Removes a content control and its content. If keepContent is true, the content is not deleted. |
| [SetTextPr](./Methods/SetTextPr.md) | None | Applies text settings to the content of the content control. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects in the current content control. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a content control that contains the current content control. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current content control. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current content control. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table or a block content control to actually add it to the current container. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds a paragraph or a table or a block content control to the current container. |
| [AddText](./Methods/AddText.md) | boolean | Adds a text to the current content control. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified content control. |
| [Copy](./Methods/Copy.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Creates a copy of an block content control. Ignores comments, footnote references, complex fields. |
| [Search](./Methods/Search.md) | [ApiRange](../ApiRange/ApiRange.md)[] | Searches for a scope of a content control object. The search results are a collection of ApiRange objects. |
| [Select](./Methods/Select.md) | None | Selects the current content control. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current content control. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current content control. |
| [GetPosInParent](./Methods/GetPosInParent.md) | Number | Returns the content control position within its parent element. |
| [ReplaceByElement](./Methods/ReplaceByElement.md) | boolean | Replaces the current content control with a new element. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current block content control. 💡 Please note that the current block content control must be in the document. |
| [AddCaption](./Methods/AddCaption.md) | boolean | Adds a caption paragraph after (or before) the current content control. 💡 Please note that the current content control must be in the document (not in the footer/header). And if the current content control is placed in a shape, then a caption is added after (or before) the parent shape. |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | Returns a list of values of the combo box / dropdown list content control. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current content control. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiBlockLvlSdt object into the JSON object. |
