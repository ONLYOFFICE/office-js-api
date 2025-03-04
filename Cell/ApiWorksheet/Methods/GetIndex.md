# GetIndex

Returns a sheet index.

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get a sheet index.

```javascript editor-xlsx
// How to get index of the sheet.

// Get the worksheet index.

var oWorksheet = Api.GetActiveSheet();
var nIndex = oWorksheet.GetIndex();
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(nIndex);
```
