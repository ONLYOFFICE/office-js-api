# GetRangeByNumber

Returns an object that represents the selected range of the current sheet using the row/column coordinates for the cell selection.

## Syntax

expression.GetRangeByNumber(nRow, nCol);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nRow | Required | Number | The row number. |
| nCol | Required | Number | The column number. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get an object that represents the selected range of the sheet using the row/column coordinates for the cell selection.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRangeByNumber(1, 2).SetValue("42");
builder.SaveFile("xlsx", "GetRangeByNumber.xlsx");
builder.CloseFile();
```