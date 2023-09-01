# SetTableHeader

Specifies that the current table row will be repeated at the top of each new page wherever this table is displayed. This gives this table row the behavior of a 'header' row on each of these pages. This element can be applied to any number of rows at the top of the table structure in order to generate multi-row table headers.<br>Inherited From: [ApiTableRowPr#SetTableHeader](../../ApiTableRowPr/Methods/SetTableHeader.md)

## Syntax

expression.SetTableHeader(isHeader);

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isHeader | Required | Boolean | The true value means that the current table row will be repeated at the top of each new page. |

## Returns

This method doesn't return any data.

## Example

This example specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x90 table and set row #1 as the table header:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 90);
oTable.SetWidth("percent", 100);
var oTableRow = oTable.GetRow(0);
oTableRow.SetTableHeader(true);
var oCell = oTableRow.GetCell(0);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Header cell #1");
oCell = oTableRow.GetCell(1);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Header cell #2");
oCell = oTableRow.GetCell(2);
oParagraph = oCell.GetContent().GetElement(0);
oParagraph.AddText("Header cell #3");
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableHeader.docx");
builder.CloseFile();
```