# SetNoWrap

Specifies how the current table cell is laid out when the parent table is displayed in a document. This setting
only affects the behavior of the cell when the {@link ApiTablePr#SetTableLayout} table layout for this table is set to use the <code>"autofit"</code> algorithm.

## Syntax

expression.SetNoWrap(isNoWrap);

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isNoWrap | Required | boolean |  | The true value means that the current table cell will not be wrapped in the parent table. |

## Returns

This method doesn't return any data.

## Example

This example specifies how the table cell is laid out when the parent table is displayed in a document.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTablePr.SetTableLayout("autofit");
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("This is a table with the autofit type of the table layout.");
oDocument.Push(oTable);
var oCopyTable1 = oTable.Copy();
oCopyTable1.SetWidth("percent", 10);
oCell = oCopyTable1.GetRow(0).GetCell(0);
oCell.Clear();
oCell.GetContent().GetElement(0).AddText("This is a table cell where text is wrapped when we try to change table width.");
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetNoWrap(false);
oDocument.Push(oCopyTable1);
var oCopyTable2 = oTable.Copy();
oCopyTable2.SetWidth("percent", 10);
oCell = oCopyTable2.GetRow(0).GetCell(0);
oCell.Clear();
oCell.GetContent().GetElement(0).AddText("This is a table cell where text is not wrapped when we try to change table width.");
oTableCellPr.SetNoWrap(true);
oCopyTable2.SetStyle(oTableStyle);
oDocument.Push(oCopyTable2);
```
