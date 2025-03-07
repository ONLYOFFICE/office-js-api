# Delete

Deletes the ApiCharacters object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example deletes the ApiCharacters object.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
characters.Delete();
```
