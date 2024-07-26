# SetWidth

Sets the preferred width to the current table cell.

## Syntax

expression.SetWidth(sType, nValue);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | TableWidth |  | Type of the width value from one of the available width values types. |
| nValue | Optional | number |  | The table cell width value measured in positive integers. |

## Returns

This method doesn't return any data.

## Example

This example sets the preferred width to the current table cell.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("All cells are at least 2 inches wide:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetWidth("twips", 2880);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
