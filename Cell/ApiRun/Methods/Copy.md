# Copy

Creates a copy of the current run.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../ApiRun.md)

## Example

This example reates a copy of the run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text that was copied. ");
oParagraph.AddElement(oRun);
var oCopyRun = oRun.Copy();
oParagraph.AddElement(oCopyRun);
builder.SaveFile("xlsx", "Copy.xlsx");
builder.CloseFile();
```