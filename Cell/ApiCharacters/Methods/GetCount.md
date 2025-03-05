# GetCount

Returns a value that represents a number of objects in the collection.

## Syntax

```javascript
expression.GetCount();
```

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a value that represents a number of objects in the collection.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);
```
