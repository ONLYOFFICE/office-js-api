# Color

The font color property.

## Syntax

expression.Color; &#124; expression.Color = Color;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Color | Required | [ApiColor](../../ApiColor/ApiColor.md) | Font color. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md) &#124; null

## Example

This example sets the font color property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oFont.Color = oColor;
builder.SaveFile("xlsx", "Color.xlsx");
builder.CloseFile();
```