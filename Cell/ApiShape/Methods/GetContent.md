# GetContent

Returns the shape inner contents where a paragraph or text runs can be inserted.

## Syntax

expression.GetContent();

`expression` - A variable that represents a [ApiShape](../ApiShape.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) &#124; null

## Example

This example shows how to get the shape inner contents where a paragraph or text runs can be inserted.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oContent = oShape.GetContent();
oContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
oContent.Push(oParagraph);
builder.SaveFile("xlsx", "GetContent.xlsx");
builder.CloseFile();
```