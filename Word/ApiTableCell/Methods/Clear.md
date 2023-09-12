# Clear

Clears the content from the current cell.

## Syntax

expression.Clear();

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if parent row is invalid)

## Example

This example clears the content from the cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oDocument.Push(oTable);
oTable.GetCell(0, 0).Clear();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The content of the table cell was cleared.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "Clear.docx");
builder.CloseFile();
```