# GetFont

Returns the ApiFont object that represents the font of the specified characters.

## Syntax

```javascript
expression.GetFont();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiFont](../../ApiFont/ApiFont.md)

## Example

This example shows how to get the ApiFont object that represents the font of the specified characters.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
