# Italic

The font italic property.

## Syntax

expression.Italic; &#124; expression.Italic = isItalic;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isItalic | Required | Boolean | Specifies that the text characters are displayed italic. |

## Returns

Boolean &#124; null

## Example

This example sets the italic property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Italic = true;
builder.SaveFile("xlsx", "Italic.xlsx");
builder.CloseFile();