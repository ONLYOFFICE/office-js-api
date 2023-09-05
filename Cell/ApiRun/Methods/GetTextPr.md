# GetTextPr

Returns the text properties of the current run.

## Syntax

expression.GetTextPr();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to get the text properties of the run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
var oTextPr = oRun.GetTextPr();
oTextPr.SetFontSize(30);
oParagraph.SetJc("left");
oRun.AddText("This is a sample text inside the shape with the font size set to 15 points using the text properties.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "GetTextPr.xlsx");
builder.CloseFile();
```