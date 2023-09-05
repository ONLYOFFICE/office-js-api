# GetName

Returns the font name property of the specified font.

## Syntax

expression.GetName();

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String &#124; null

## Example

This example shows how to get the font name property of the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetName("Font 1");
var sFontName = oFont.GetName();
oWorksheet.GetRange("B3").SetValue("Font name: " + sFontName);
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();
```