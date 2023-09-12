# GetNext

Returns the next row if exists.

## Syntax

expression.GetNext();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableRow](../ApiTableRow.md) &#124; null (returns null if row is last)

## Example

This example shows how to get the next row.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(0);
oRow.GetCell(0).GetContent().GetElement(0).AddText("First row");
oRow.GetNext().GetCell(0).GetContent().GetElement(0).AddText("Second row");
oDocument.Push(oTable);
builder.SaveFile("docx", "GetNext.docx");
builder.CloseFile();
```