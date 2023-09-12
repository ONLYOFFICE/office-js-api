# GetUnderline

Returns the type of underline applied to the specified font.

## Syntax

expression.GetUnderline();

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[XlUnderlineStyle](../../../Enumerations/XlUnderlineStyle.md) &#124; null

## Example

This example shows how to get the type of underline applied to the specified font.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");
var sUnderline = oFont.GetUnderline();
oWorksheet.GetRange("B3").SetValue("Underline property: " + sUnderline);
builder.SaveFile("xlsx", "GetUnderline.xlsx");
builder.CloseFile();
```