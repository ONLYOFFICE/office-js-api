# SetCellMarginTop

Specifies an amount of space which will be left between the upper extent of the cell contents
and the border of a specific table cell within a table.

## Syntax

expression.SetCellMarginTop(nValue);

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space above the upper extent of the cell measured in twentieths of a point (1/1440 of an inch). If this value is <code>null</code>, then default table cell top margin will be used, otherwise the table cell top margin will be overridden with the specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which will be left between the upper extent of the cell contents and the border of a specific table cell within a table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
var oCell = oTable.GetRow(0).GetCell(0);
oCell.GetContent().GetElement(0).AddText("This is just a sample text to show that the top margin for all the table cells is 36 points.");
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellMarginTop(720);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
