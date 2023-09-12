# GetParentTableCell

Returns a table cell that contains the current run.

## Syntax

expression.GetParentTableCell();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) &#124; null (returns null is parent cell doesn't exist)

## Example

This example shows how to get a table cell that contains the run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
var oParentTableCell = oRun.GetParentTableCell();
oParentTableCell.SetShd("clear", 255, 111, 61, false);
builder.SaveFile("docx", "GetParentTableCell.docx");
builder.CloseFile();
```