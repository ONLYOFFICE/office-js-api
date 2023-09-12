# GetCell

Returns a cell by its position.

## Syntax

expression.GetCell(nPos);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The cell position in the current row. |

## Returns

[ApiTableCell](../../ApiTableCell/ApiTableCell.md)

## Example

This example shows how to get a cell by its position.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 1440);
var oCell = oTableRow.GetCell(1);
oCell.SetVerticalAlign("bottom");
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align bottom");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "GetCell.docx");
builder.CloseFile();
```