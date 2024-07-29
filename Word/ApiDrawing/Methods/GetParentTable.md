# GetParentTable

Returns a parent table that contains the graphic object.

## Syntax

expression.GetParentTable();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTable, null

## Example

This example shows how to get a parent table that contains the graphic object.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing);
var oCell = oTable.GetCell(1, 1);
oCell.AddElement(0, oParagraph);
oDocument.Push(oTable);
var oParentTable = oDrawing.GetParentTable();
var oTableStyle = oDocument.GetStyle("Bordered");
oParentTable.SetStyle(oTableStyle);
```
