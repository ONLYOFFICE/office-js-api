# GetWidth

Returns the width of the current drawing.

## Syntax

expression.GetWidth();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[EMU](../../../Enumerations/Emu.md)

## Example

This example shows how to get the width of the drawing.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
var nWidth = oDrawing.GetWidth();
oWorksheet.GetRange("A1").SetValue("Drawing width = " + nWidth);
builder.SaveFile("xlsx", "GetWidth.xlsx");
builder.CloseFile();
```