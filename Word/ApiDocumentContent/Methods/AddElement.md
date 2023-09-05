# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.

## Syntax

expression.AddElement(nPos, oElement);

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The document element which will be added at the current position. |

## Returns

This method doesn't return any data.

## Example

This example adds a paragraph in document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oDocContent = oDrawing.GetDocContent();
oDocContent.RemoveAllElements();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oDocContent.AddElement(0, oParagraph);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```