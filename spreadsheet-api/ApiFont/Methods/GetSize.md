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
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);
```
