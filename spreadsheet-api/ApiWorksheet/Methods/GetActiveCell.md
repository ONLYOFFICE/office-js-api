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



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let activeCell = worksheet.GetActiveCell();
activeCell.SetValue("This sample text was placed in an active cell.");
```
