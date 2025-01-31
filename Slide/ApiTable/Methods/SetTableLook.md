# SetTableLook

Specifies the components of the conditional formatting of the referenced table style (if one exists)
which shall be applied to the set of table rows with the current table-level property exceptions. A table style
can specify up to six different optional conditional formats [Example: Different formatting for first column],
which then can be applied or omitted from individual table rows in the parent table.

The default setting is to apply the row and column banding formatting, but not the first row, last row, first
column, or last column formatting.

## Syntax

```javascript
expression.SetTableLook(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFirstColumn | Required | boolean |  | Specifies that the first column conditional formatting shall be applied to the     table. |
| isFirstRow | Required | boolean |  | Specifies that the first row conditional formatting shall be applied to the table. |
| isLastColumn | Required | boolean |  | Specifies that the last column conditional formatting shall be applied to the     table. |
| isLastRow | Required | boolean |  | Specifies that the last row conditional formatting shall be applied to the table. |
| isHorBand | Required | boolean |  | Specifies that the horizontal banding conditional formatting shall not be applied     to the table. |
| isVerBand | Required | boolean |  | Specifies that the vertical banding conditional formatting shall not be applied to     the table. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set table lock.

```javascript
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetTableLook(true, false, false, false, false, true);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
```
