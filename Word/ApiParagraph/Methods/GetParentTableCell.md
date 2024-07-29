# GetParentTableCell

Returns a table cell that contains the current paragraph.

## Syntax

expression.GetParentTableCell();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

ApiTableCell, null

## Example

This example shows how to get a table cell that contains the current paragraph.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
var oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
var oParentTableCell = oParagraph.GetParentTableCell();
oParentTableCell.SetShd("clear", 255, 111, 61, false);
```
