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
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oDocContent.AddElement(oParagraph);
oDocContent.Push(oParagraph);
builder.SaveFile("xlsx", "AddElement.xlsx");
builder.CloseFile();
```