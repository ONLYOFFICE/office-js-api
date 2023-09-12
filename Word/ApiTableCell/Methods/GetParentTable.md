# GetParentTable

Returns a parent table of the current cell.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTable](../../ApiTable/ApiTable.md) &#124; null (returns null if parent table doesn't exist)

## Example

This example shows how to get a parent table of the cell.

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
var oParentTable = oTable.GetCell(0, 0).GetParentTable();
oParentTable.SetTableBorderTop("single", 32, 0, 51, 51, 51);
builder.SaveFile("docx", "GetParentTable.docx");
builder.CloseFile();
```