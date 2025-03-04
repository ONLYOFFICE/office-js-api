# GetActiveCell

Returns an object that represents an active cell.

## Syntax

```javascript
expression.GetActiveCell();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents an active cell.

```javascript editor-xlsx
// How to get selected active cell.

// Get an active cell and insert data to it.

var oWorksheet = Api.GetActiveSheet();
var oActiveCell = oWorksheet.GetActiveCell();
oActiveCell.SetValue("This sample text was placed in an active cell.");
```
