# SetTableLook

Specifies the components of the conditional formatting of the referenced table style (if one exists) which shall be applied to the set of table rows with the current table-level property exceptions. A table style can specify up to six different optional conditional formats [Example: Different formatting for first column], which then can be applied or omitted from individual table rows in the parent table.

## Syntax

expression.SetTableLook(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isFirstColumn | Required | Boolean | Specifies that the first column conditional formatting shall be applied to the table. |
| isFirstRow | Required | Boolean | Specifies that the first row conditional formatting shall be applied to the table. |
| isLastColumn | Required | Boolean | Specifies that the last column conditional formatting shall be applied to the table. |
| isLastRow | Required | Boolean | Specifies that the last row conditional formatting shall be applied to the table. |
| isHorBand | Required | Boolean | Specifies that the horizontal banding conditional formatting shall not be applied to the table. |
| isVerBand | Required | Boolean | Specifies that the vertical banding conditional formatting shall not be applied to the table. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set table lock.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetTableLook(true, false, false, false, false, true);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "SetTableLook.pptx");
builder.CloseFile();
```