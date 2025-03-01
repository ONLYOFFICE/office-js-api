# GetName

Returns the font name property of the specified font.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get the font name property of the specified font.

```javascript editor-xlsx
// How to determine a font name.

// Apply a font to the characters then get its name and add it in the range.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetName("Font 1");
var sFontName = oFont.GetName();
oWorksheet.GetRange("B3").SetValue("Font name: " + sFontName);
```
