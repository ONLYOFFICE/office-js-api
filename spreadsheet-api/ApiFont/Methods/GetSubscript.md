# GetSubscript

Returns the subscript property of the specified font.

## Syntax

```javascript
expression.GetSubscript();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean \| null

## Example

This example shows how to get the subscript property of the specified font.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSubscript(true);
let isSubscript = font.GetSubscript();
worksheet.GetRange("B3").SetValue("Subscript property: " + isSubscript);
```
