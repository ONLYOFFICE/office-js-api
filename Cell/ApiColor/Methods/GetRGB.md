# GetRGB

Returns a color value in RGB format.

## Syntax

```javascript
expression.GetRGB();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let color = Api.CreateColorFromRGB(255, 111, 61);
worksheet.GetRange("A2").SetValue("Text with color");
worksheet.GetRange("A2").SetFontColor(color);
let rgbColor = color.GetRGB();
worksheet.GetRange("A4").SetValue("Cell color in RGB format: " + rgbColor);
```
