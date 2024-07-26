# SetTableBorderInsideH

Specifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edgeof the parent table (all horizontal borders which are not the topmost or bottommost borders).

## Syntax

expression.SetTableBorderInsideH(sType, nSize, nSpace, r, g, b);

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | BorderType |  | The horizontal table cell border style. |
| nSize | Required | pt_8 |  | The width of the current border measured in eighths of a point. |
| nSpace | Required | pt |  | The spacing offset in the horizontal table cells of the table measured in points used to place this border. |
| r | Required | byte |  | Red color component value. |
| g | Required | byte |  | Green color component value. |
| b | Required | byte |  | Blue color component value. |

## Returns

This method doesn't return any data.

## Example

This example sSpecifies the border which will be displayed on all horizontal table cell borders which are not on the outmost edge of the parent table.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("We add the inside horizontal 4 point black border:");
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableBorderInsideH("single", 32, 0, 51, 51, 51);
oTable.SetTableLook(true, true, true, true, false, false);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
```
