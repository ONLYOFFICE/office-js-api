# SetTableLook

Specifies the conditional formatting components of the referenced table style (if one exists) 
which will be applied to the set of table rows with the current table-level property exceptions. A table style 
can specify up to six different optional conditional formats, for example, different formatting for the first column, 
which then can be applied or omitted from individual table rows in the parent table.

The default setting is to apply the row and column band formatting, but not the first row, last row, first 
column, or last column formatting.

## Syntax

expression.SetTableLook(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand);

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFirstColumn | Required | boolean |  | Specifies that the first column conditional formatting will be applied to the table. |
| isFirstRow | Required | boolean |  | Specifies that the first row conditional formatting will be applied to the table. |
| isLastColumn | Required | boolean |  | Specifies that the last column conditional formatting will be applied to the table. |
| isLastRow | Required | boolean |  | Specifies that the last row conditional formatting will be applied to the table. |
| isHorBand | Required | boolean |  | Specifies that the horizontal band conditional formatting will not be applied to the table. |
| isVerBand | Required | boolean |  | Specifies that the vertical band conditional formatting will not be applied to the table. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set table lock.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We set the table look to override the current table style:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.SetTableLook(true, true, true, true, true, true);
oTableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", 255, 111, 61);
oDocument.Push(oTable);
```
