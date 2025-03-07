# GetParent

Returns the parent object of the specified characters.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the parent object of the specified characters.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let parent = characters.GetParent();
parent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
```
