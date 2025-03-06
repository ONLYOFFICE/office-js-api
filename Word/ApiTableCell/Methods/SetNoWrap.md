# SetNoWrap

Specifies how the current table cell is laid out when the parent table is displayed in a document. This setting\nonly affects the behavior of the cell when the [ApiTablePr#SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md) table layout for this table is set to use the &lt;code&gt;"autofit"&lt;/code&gt; algorithm.

## Syntax

```javascript
expression.SetNoWrap(isNoWrap);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isNoWrap | Required | boolean |  | The true value means that the current table cell will not be wrapped in the parent table. |

## Returns

This method doesn't return any data.

## Example

This example specifies how the table cell is laid out when the parent table is displayed in a document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("autofit");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("This is a table with the autofit type of the table layout.");
doc.Push(table);
let copyTable1 = table.Copy();
copyTable1.SetWidth("percent", 10);
cell = copyTable1.GetRow(0).GetCell(0);
cell.Clear();
cell.GetContent().GetElement(0).AddText("This is a table cell where text is wrapped when we try to change table width.");
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetNoWrap(false);
doc.Push(copyTable1);
let copyTable2 = table.Copy();
copyTable2.SetWidth("percent", 10);
cell = copyTable2.GetRow(0).GetCell(0);
cell.Clear();
cell.GetContent().GetElement(0).AddText("This is a table cell where text is not wrapped when we try to change table width.");
tableCellPr.SetNoWrap(true);
copyTable2.SetStyle(tableStyle);
doc.Push(copyTable2);
```
