# Subscript

The font subscript property.

## Syntax

expression.Subscript; &#124; expression.Subscript = isSubscript;

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isSubscript | Required | Boolean | Specifies that the text characters are displayed subscript. |

## Returns

Boolean &#124; null

## Example

This example sets the subscript property to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.Subscript = true;
builder.SaveFile("xlsx", "Subscript.xlsx");
builder.CloseFile();
```