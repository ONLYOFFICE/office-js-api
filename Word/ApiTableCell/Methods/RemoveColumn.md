# RemoveColumn

Removes a column containing the current cell.

## Syntax

expression.RemoveColumn();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean &#124; null (returns null if parent table doesn't exist)

## Example

This example removes a column containing the cell.

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
oTable.GetCell(0, 0).RemoveColumn();
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("A column with Cell 1 was removed.");
builder.SaveFile("docx", "RemoveColumn.docx");
builder.CloseFile();
```