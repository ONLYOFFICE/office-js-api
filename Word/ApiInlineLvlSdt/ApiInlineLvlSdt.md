# ApiInlineLvlSdt

Represents the ApiInlineLvlSdt class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "inlineLvlSdt" | Returns a type of the ApiInlineLvlSdt class. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current content control. |
| [SetLock](./Methods/SetLock.md) | None | Sets the lock to the current inline text content control: **"contentLocked"** - content cannot be edited. **"sdtContentLocked"** - content cannot be edited and the container cannot be deleted. **"sdtLocked"** - the container cannot be deleted. |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | Returns the lock type of the current container. |
| [SetTag](./Methods/SetTag.md) | None | Adds a string tag to the current inline text content control. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current container. |
| [SetLabel](./Methods/SetLabel.md) | None | Adds a string label to the current inline text content control. |
| [GetLabel](./Methods/GetLabel.md) | string | Returns the label attribute for the current container. |
| [SetAlias](./Methods/SetAlias.md) | None | Sets the alias attribute to the current container. |
| [GetAlias](./Methods/GetAlias.md) | string | Returns the alias attribute for the current container. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current inline text content control. The text content  control is created with one text run present in it by default, so even without any  element added this method will return the value of '1'. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns an element of the current inline text content control using the position specified. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified from the current inline text content control. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current inline text content control. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the inline text content control. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the end of inline text content control. |
| [AddText](./Methods/AddText.md) | boolean | Adds text to the current content control. |
| [Delete](./Methods/Delete.md) | boolean | Removes a content control and its content. If keepContent is true, the content is not deleted. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Applies text settings to the content of the content control. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a paragraph that contains the current content control. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns a content control that contains the current content control. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current content control. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current content control. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified content control. |
| [Copy](./Methods/Copy.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a copy of an inline content control. Ignores comments, footnote references, complex fields. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiInlineLvlSdt object into the JSON object. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current inline content control. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current inline content control. Can't be set to checkbox or radio button* |
| [IsForm](./Methods/IsForm.md) | boolean | Checks if the content control is a form. |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current inline content control. 💡 Please note that this inline content control must be in the document. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current content control. |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | Returns a list of values of the combo box / dropdown list content control. |
