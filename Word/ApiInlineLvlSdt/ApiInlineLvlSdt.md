# ApiInlineLvlSdt

Represents the ApiInlineLvlSdt class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the current inline content control.\n💡 Please note that this inline content control must be in the document. |
| [AddElement](./Methods/AddElement.md) | boolean | Adds an element to the inline text content control. |
| [AddText](./Methods/AddText.md) | boolean | Adds text to the current content control. |
| [Copy](./Methods/Copy.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a copy of an inline content control. Ignores comments, footnote references, complex fields. |
| [Delete](./Methods/Delete.md) | boolean | Removes a content control and its content. If keepContent is true, the content is not deleted. |
| [GetAlias](./Methods/GetAlias.md) | string | Returns the alias attribute for the current container. |
| [GetClassType](./Methods/GetClassType.md) | "inlineLvlSdt" | Returns a type of the ApiInlineLvlSdt class. |
| [GetDropdownList](./Methods/GetDropdownList.md) | [ApiContentControlList](../ApiContentControlList/ApiContentControlList.md) | Returns a list of values of the combo box / dropdown list content control. |
| [GetElement](./Methods/GetElement.md) | [ParagraphContent](../Enumeration/ParagraphContent.md) | Returns an element of the current inline text content control using the position specified. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current inline text content control. The text content \ncontrol is created with one text run present in it by default, so even without any \nelement added this method will return the value of '1'. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal id of the current content control. |
| [GetLabel](./Methods/GetLabel.md) | string | Returns the label attribute for the current container. |
| [GetLock](./Methods/GetLock.md) | [SdtLock](../Enumeration/SdtLock.md) | Returns the lock type of the current container. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| null | Returns a content control that contains the current content control. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a paragraph that contains the current content control. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a table that contains the current content control. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a table cell that contains the current content control. |
| [GetPlaceholderText](./Methods/GetPlaceholderText.md) | string | Returns the placeholder text from the current inline content control. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the specified content control. |
| [GetTag](./Methods/GetTag.md) | string | Returns the tag attribute for the current container. |
| [IsForm](./Methods/IsForm.md) | boolean | Checks if the content control is a form. |
| [MoveCursorOutside](./Methods/MoveCursorOutside.md) | None | Places a cursor before/after the current content control. |
| [Push](./Methods/Push.md) | boolean | Adds an element to the end of inline text content control. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | boolean | Removes all the elements from the current inline text content control. |
| [RemoveElement](./Methods/RemoveElement.md) | boolean | Removes an element using the position specified from the current inline text content control. |
| [SetAlias](./Methods/SetAlias.md) | None | Sets the alias attribute to the current container. |
| [SetLabel](./Methods/SetLabel.md) | None | Adds a string label to the current inline text content control. |
| [SetLock](./Methods/SetLock.md) | None | Sets the lock to the current inline text content control:\n-**"contentLocked"** - content cannot be edited.\n-**"sdtContentLocked"** - content cannot be edited and the container cannot be deleted.\n-**"sdtLocked"** - the container cannot be deleted. |
| [SetPlaceholderText](./Methods/SetPlaceholderText.md) | boolean | Sets the placeholder text to the current inline content control.\nCan't be set to checkbox or radio button* |
| [SetTag](./Methods/SetTag.md) | None | Adds a string tag to the current inline text content control. |
| [SetTextPr](./Methods/SetTextPr.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Applies text settings to the content of the content control. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiInlineLvlSdt object into the JSON object. |
