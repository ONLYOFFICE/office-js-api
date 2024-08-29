# GetRGB

Returns a color value in RGB format.

## Syntax

expression.GetRGB();

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oWorksheet.GetRange("A2").SetValue("Text with color");
oWorksheet.GetRange("A2").SetFontColor(oColor);
var nColor = oColor.GetRGB();
oWorksheet.GetRange("A4").SetValue("Cell color in RGB format: " + nColor);
```
