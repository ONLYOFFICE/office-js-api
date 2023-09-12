# SetCellPr

Sets the cell properties to the current cell.

## Syntax

expression.SetCellPr(oApiTableCellPr);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiTableCellPr | Required | [ApiTableCellPr](../../ApiTableCellPr/ApiTableCellPr.md) | The properties that will be set to the current table cell. |

## Returns

Boolean (returns false if param is invalid)

## Example

This example sets the cell properties to the current cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable1 = Api.CreateTable(3, 3);
oTable1.SetWidth("percent", 100);
oTable1.SetStyle(oTableStyle);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTable1.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTableCellPr.SetCellMarginTop(720);
oDocument.Push(oTable1);
var oTable2 = Api.CreateTable(3, 3);
oTable2.SetWidth("percent", 100);
oTable2.SetStyle(oTableStyle);
oTable2.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oDocument.Push(oTable2);
oTable2.GetCell(0, 0).SetCellPr(oTableCellPr);
builder.SaveFile("docx", "SetCellPr.docx");
builder.CloseFile();
```