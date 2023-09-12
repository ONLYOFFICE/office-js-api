# SetVerticalAlign

Specifies the vertical alignment for the text contents within the current table cell.

## Syntax

expression.SetVerticalAlign(sType);

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| name | Required | [VerticalTextAlign](../../../Enumerations/VerticalTextAlign.md) | The available types of the vertical alignment for the text contents of the current table cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies the vertical alignment for the text contents within the table cell.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetHeight("atLeast", 1440);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetVerticalAlign("bottom");
var oCell = oTable.GetRow(0).GetCell(0);
var oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Align bottom");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetVerticalAlign.docx");
builder.CloseFile();
```