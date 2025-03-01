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
// How to delete characters from an array.

// Remove all characters.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(9, 4);
oCharacters.Delete();
```
