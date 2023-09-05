# AddLineBreak

Adds a line break to the current run position and starts the next element from a new line.

## Syntax

expression.AddLineBreak();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.
## Example

This example adds a line break to the run position and starts the next element from a new line.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first line. Nothing special.");
oRun.AddLineBreak();
oRun.AddText("This is the text which starts from the beginning of the second line. ");
oRun.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "AddLineBreak.xlsx");
builder.CloseFile();
```