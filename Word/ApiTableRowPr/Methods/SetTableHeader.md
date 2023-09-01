# SetTableHeader

Specifies that the current table row will be repeated at the top of each new page wherever this table is displayed. This gives this table row the behavior of a 'header' row on each of these pages. This element can be applied to any number of rows at the top of the table structure in order to generate multi-row table headers.

## Syntax

expression.SetTableHeader(isHeader);

`expression` - A variable that represents a [ApiTableRowPr](../ApiTableRowPr.md) class.

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
oParagraph.AddText("We create a 3x3 table and set all table rows as the table headers:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetTableLook(true, true, true, true, false, false);
var oTableRowPr = oTableStyle.GetTableRowPr();
oTableRowPr.SetTableHeader(true);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
builder.SaveFile("docx", "SetTableHeader.docx");
builder.CloseFile();
```