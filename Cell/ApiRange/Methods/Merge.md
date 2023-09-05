# Merge

Merges the selected cell range into a single cell or a cell row.

## Syntax

expression.Merge(isAcross);

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isAcross | Required | Boolean | When set to "true", the cells within the selected range will be merged along the rows, but remain split in the columns. When set to "false", the whole selected range of cells will be merged into a single cell. |

## Returns

This method doesn't return any data.

## Example

This example merges the selected cell range into a single cell or a cell row.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A3:E8").Merge(true);
oWorksheet.GetRange("A9:E14").Merge(false);
builder.SaveFile("xlsx", "Merge.xlsx");
builder.CloseFile();
```