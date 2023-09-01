# GetIndex

Returns the current row index.

## Syntax

expression.GetIndex();

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the row index.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetStyle(oTableStyle);
oTable.SetWidth("percent", 100);
var oRow = oTable.GetRow(1);
oRow.GetCell(0).GetContent().GetElement(0).AddText("Row index: " + oRow.GetIndex());
oDocument.Push(oTable);
builder.SaveFile("docx", "GetIndex.docx");
builder.CloseFile();
```