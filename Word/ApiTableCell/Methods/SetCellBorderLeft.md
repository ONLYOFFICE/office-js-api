# SetCellBorderLeft

Sets the border which will be displayed to the left of the current table cell.

## Syntax

expression.SetCellBorderLeft(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | BorderType |  | The cell left border style. |
| nSize | Required | pt_8 |  | The width of the current cell left border measured in eighths of a point. |
| nSpace | Required | pt |  | The spacing offset in the left part of the table cell measured in points used to place this border. |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example sets the border which will be displayed to the left of the table cell.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the left 4 point black border to all cells:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellBorderLeft("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
