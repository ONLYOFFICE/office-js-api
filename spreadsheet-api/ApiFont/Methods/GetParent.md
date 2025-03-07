# GetParent

Returns the parent ApiCharacters object of the specified font.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiFont](../ApiFont.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## Example

This example shows how to get the parent ApiCharacters object of the specified font.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");
```
