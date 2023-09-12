# GetNext

Returns the next cell if exists.

## Syntax

expression.GetNext();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableCell](../ApiTableCell.md) &#124; null (returns null if cell is last)

## Example

This example shows how to get the next cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
oTable.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
oDocument.Push(oTable);
var oNextCell = oTable.GetCell(0, 0).GetNext();
oNextCell.GetContent().GetElement(0).SetBold(true);
builder.SaveFile("docx", "GetNext.docx");
builder.CloseFile();
```