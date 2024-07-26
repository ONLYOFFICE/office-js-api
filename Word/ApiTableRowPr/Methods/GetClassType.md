# GetClassType

Returns a type of the ApiTableRowPr class.

## Syntax

expression.GetClassType();

`expression` - A variable that represents a [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRowPr"

## Example

This example gets a class type and pastes it into the presentation.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
var oTableRowPr = oTableStyle.GetTableRowPr();
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var sClassType = oTableRowPr.GetClassType();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Class Type = " + sClassType);
```
