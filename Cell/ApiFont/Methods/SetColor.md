# SetColor

Sets the font color property to the specified font.

## Syntax

expression.SetColor(Color);

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| Color | Required | [ApiColor](../../ApiColor/ApiColor.md) | Font color. |

## Returns

This method doesn't return any data.

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
oFont.SetColor(oColor);
builder.SaveFile("xlsx", "SetColor.xlsx");
builder.CloseFile();
```