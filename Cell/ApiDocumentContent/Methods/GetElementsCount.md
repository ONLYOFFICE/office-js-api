# GetElementsCount

Returns a number of elements in the current document content.

## Syntax

expression.GetElementsCount();

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a number of elements in the current document content.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 200 * 36000, 60 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("We got the first paragraph inside the shape.");
oParagraph.AddLineBreak();
oParagraph.AddText("Number of elements inside the shape: " + oDocContent.GetElementsCount());
oParagraph.AddLineBreak();
oParagraph.AddText("Line breaks are NOT counted into the number of elements.");
builder.SaveFile("xlsx", "GetElementsCount.xlsx");
builder.CloseFile();
```