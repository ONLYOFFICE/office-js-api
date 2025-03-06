# ApiDocumentContent

Represents the ApiDocumentContent class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddElement](./Methods/AddElement.md) | None | Adds a paragraph or a table or a blockLvl content control using its position in the document content. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns a collection of chart objects from the document content. |
| [GetAllDrawingObjects](./Methods/GetAllDrawingObjects.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the document content. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns a collection of image objects from the document content. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns a collection of OLE objects from the document content. |
| [GetAllParagraphs](./Methods/GetAllParagraphs.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all paragraphs from the current document content. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns a collection of shape objects from the document content. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md)[] | Returns an array of all tables from the current document content. |
| [GetClassType](./Methods/GetClassType.md) | "documentContent" | Returns a type of the ApiDocumentContent class. |
| [GetContent](./Methods/GetContent.md) | [DocumentElement](../Enumeration/DocumentElement.md)[] | Returns an array of document elements from the current ApiDocumentContent object. |
| [GetElement](./Methods/GetElement.md) | [DocumentElement](../Enumeration/DocumentElement.md) | Returns an element by its position in the document. |
| [GetElementsCount](./Methods/GetElementsCount.md) | number | Returns a number of elements in the current document. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns a Range object that represents the part of the document contained in the document content. |
| [GetText](./Methods/GetText.md) | string | Returns the inner text of the current document content object. |
| [Push](./Methods/Push.md) | boolean | Pushes a paragraph or a table to actually add it to the document. |
| [RemoveAllElements](./Methods/RemoveAllElements.md) | None | Removes all the elements from the current document or from the current document element.\n💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add\ncontent to this paragraph, use the [ApiDocumentContent#GetElement](../ApiDocumentContent/Methods/GetElement.md) method. |
| [RemoveElement](./Methods/RemoveElement.md) | None | Removes an element using the position specified. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDocumentContent object into the JSON object. |
