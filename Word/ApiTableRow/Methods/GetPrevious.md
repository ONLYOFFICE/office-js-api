# GetPrevious

Returns the previous row if exists.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableRow](../ApiTableRow.md) &#124; null (returns null if row is first)

## Example

This example shows how to get the previous row.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
var oRow = oTable.GetRow(1);
oRow.GetCell(1).GetContent().GetElement(0).AddText("Second row");
oRow.GetPrevious().GetCell(1).GetContent().GetElement(0).AddText("First row");
oDocument.Push(oTable);
builder.SaveFile("docx", "GetPrevious.docx");
builder.CloseFile();
```