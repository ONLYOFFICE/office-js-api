# GetStrikethrough

Returns the strikethrough property of the specified font.

## Syntax

```javascript
expression.GetStrikethrough();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean | null

## Example

This example shows how to get the strikethrough property of the specified font.

```javascript
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
var oFont = oCharacters.GetFont();
oFont.SetStrikethrough(true);
var bStrikethrough = oFont.GetStrikethrough();
oWorksheet.GetRange("B3").SetValue("Strikethrough property: " + bStrikethrough);
```
