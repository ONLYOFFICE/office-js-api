# SetCellBorderRight

Sets the border which will be displayed to the right of the current table cell.

## Syntax

expression.SetCellBorderRight(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [BorderType](../../Enumeration/BorderType.md) |  | The cell right border style. |
| nSize | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current cell right border measured in eighths of a point. |
| nSpace | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the right part of the table cell measured in points used to place this border. |
| r | Required | [byte](../../Enumeration/byte.md) |  | Red color component value. |
| g | Required | [byte](../../Enumeration/byte.md) |  | Green color component value. |
| b | Required | [byte](../../Enumeration/byte.md) |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example sets the border which will be displayed to the right of the table cell.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We create a 3x3 table and add the right 4 point black border to all cells:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableCellPr = oTableStyle.GetTableCellPr();
oTableCellPr.SetCellBorderRight("single", 32, 0, 51, 51, 51);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
