# UnMerge

Splits the selected merged cell range into the single cells.

## Syntax

```javascript
expression.UnMerge();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example splits the selected merged cell range into the single cells.

```javascript editor-xlsx
// How to unmerge a range of cells.

// Get a range and split its merged cells.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A5:E5").UnMerge();
```
