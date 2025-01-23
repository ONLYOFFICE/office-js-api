# GetSubscript

Returns the subscript property of the specified font.

## Syntax

expression.GetSubscript();

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean | null

## Example

This example shows how to get the subscript property of the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetSubscript(true);
var bSubscript = oFont.GetSubscript();
oWorksheet.GetRange("B3").SetValue("Subscript property: " + bSubscript);
```
