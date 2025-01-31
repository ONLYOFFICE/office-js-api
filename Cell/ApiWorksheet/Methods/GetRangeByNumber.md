# GetRangeByNumber

Returns an object that represents the selected range of the current sheet using the **row/column** coordinates for the cell selection.

## Syntax

```javascript
expression.GetRangeByNumber(nRow, nCol);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nRow | Required | number |  | The row number. |
| nCol | Required | number |  | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection.

```javascript
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRangeByNumber(1, 2).SetValue("42");
```
