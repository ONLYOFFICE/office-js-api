# AddLineBreak

Adds a line break to the current position and starts the next element from a new line.

## Syntax

expression.AddLineBreak();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds a line break to the current position and starts the next element from a new line.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
var oDocContent = oShape.GetContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("This is a text inside the shape aligned left.");
oParagraph.AddLineBreak();
oParagraph.AddText("This is a text after the line break.");
builder.SaveFile("xlsx", "AddLineBreak.xlsx");
builder.CloseFile();
```