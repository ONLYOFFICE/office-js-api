# GetTableDescription

Returns the table description.

## Syntax

expression.GetTableDescription();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the table description.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableDescription("Empty table");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table description: " + oTablePr.GetTableDescription());
oDocument.Push(oTable);
```
