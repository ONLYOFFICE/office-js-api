# SetColor

Sets the font color property to the specified font.
💡 This method will work only with the text format of the cell.

## Syntax

```javascript
expression.SetColor(Color);
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | Font color. |

## Returns

This method doesn't return any data.

## Example

This example sets the font color property to the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
var oColor = Api.CreateColorFromRGB(255, 111, 61);
oFont.SetColor(oColor);
```
