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
// How to get collection objects count.

// How to get array length.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var nCount = oCharacters.GetCount();
oWorksheet.GetRange("B3").SetValue("Number of characters: " + nCount);
```
