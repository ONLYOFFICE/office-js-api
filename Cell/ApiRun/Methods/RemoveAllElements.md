# RemoveAllElements

Removes all the elements from the current run.

## Syntax

expression.RemoveAllElements();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example removes all the elements from the run.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oRun.RemoveAllElements();
oRun.AddText("All elements from this run were removed before adding this text.");
oParagraph.AddElement(oRun);
builder.SaveFile("xlsx", "RemoveAllElements.xlsx");
builder.CloseFile();
```