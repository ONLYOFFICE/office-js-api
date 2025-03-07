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



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
