# RemoveRow

Removes a row containing the current cell.

## Syntax

expression.RemoveRow();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean

## Example

This example removes a row containing the cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 0).RemoveRow();
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("A row with Cell 1 was removed.");
builder.SaveFile("docx", "RemoveRow.docx");
builder.CloseFile();
```