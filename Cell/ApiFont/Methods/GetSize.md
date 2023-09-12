# GetSize

Returns the font size property of the specified font.

## Syntax

expression.GetSize();

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number &#124; null

## Example

This example shows how to get the font size property of the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSize(18);
var nSize = oFont.GetSize();
oWorksheet.GetRange("B3").SetValue("Size property: " + nSize);
builder.SaveFile("xlsx", "GetSize.xlsx");
builder.CloseFile();
```