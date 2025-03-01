# GetUnderline

Returns the type of underline applied to the specified font.

## Syntax

```javascript
expression.GetUnderline();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) \| null

## Example

This example shows how to get the type of underline applied to the specified font.

```javascript editor-xlsx
// How to determine whether a font is underlined or not.

// Get a boolean value that represents whether a font has an underline property or not and show the value in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetUnderline("xlUnderlineStyleSingle");
var sUnderline = oFont.GetUnderline();
oWorksheet.GetRange("B3").SetValue("Underline property: " + sUnderline);
```
