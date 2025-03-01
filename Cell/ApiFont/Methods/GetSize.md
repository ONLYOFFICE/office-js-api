# GetSize

Returns the font size property of the specified font.

## Syntax

```javascript
expression.GetSize();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number \| null

## Example

This example shows how to get the font size property of the specified font.

```javascript editor-xlsx
// How to determine a font size of characters.

// Get the size of a font and display it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSize(18);
var nSize = oFont.GetSize();
oWorksheet.GetRange("B3").SetValue("Size property: " + nSize);
```
