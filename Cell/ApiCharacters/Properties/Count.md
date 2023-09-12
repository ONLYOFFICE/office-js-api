# Count

The number of characters in the collection. **Read-only**

## Syntax

expression.Count;

`expression` - A variable that represents a [ApiCharacters](../ApiCharacters.md) class.

## Returns

Number

## Example

This example shows how to get a value that represents a number of objects in the collection.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1");
oRange.SetValue("This is just a sample text.");
var oCharacters = oRange.GetCharacters(23, 4);
var nCount = oCharacters.Count;
oWorksheet.GetRange("B3").SetValue("Number of characters: " + nCount);
builder.SaveFile("xlsx", "Count.xlsx");
builder.CloseFile();
```