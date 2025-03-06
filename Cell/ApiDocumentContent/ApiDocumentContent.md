# ApiDocumentContent

Represents the ApiDocumentContent class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | None | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | Returns a type of the ApiDocumentContent class. |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current document or from the current document element.\n💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add\ncontent to this paragraph, use the [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified. |
