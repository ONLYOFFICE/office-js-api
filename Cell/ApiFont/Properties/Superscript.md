# Superscript

The font superscript property.

## Syntax

expression.Superscript; &#124; expression.Superscript = isSuperscript;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isSuperscript | Required | Boolean | Specifies that the text characters are displayed superscript. |

## Returns

Boolean &#124; null

## Example

This example sets the superscript property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Superscript = true;
builder.SaveFile("xlsx", "Superscript.xlsx");
builder.CloseFile();
```