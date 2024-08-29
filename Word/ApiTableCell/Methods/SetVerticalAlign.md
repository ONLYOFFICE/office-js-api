# SetVerticalAlign

Specifies the vertical alignment for the text contents within the current table cell.

## Syntax

expression.SetVerticalAlign(sType);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "top" &#124; "center" &#124; "bottom" |  | The available types of the vertical alignment for the text contents of the current table cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies the vertical alignment for the text contents within the table cell.

```javascript
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
```
