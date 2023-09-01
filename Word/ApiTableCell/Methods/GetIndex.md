# GetIndex

Returns the current cell index.

## Syntax

expression.GetIndex();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the cell index.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell index: " + oTable.GetCell(0, 0).GetIndex());
builder.SaveFile("docx", "GetIndex.docx");
builder.CloseFile();
```