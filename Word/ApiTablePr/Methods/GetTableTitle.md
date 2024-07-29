# GetTableTitle

Returns the table title (caption).

## Syntax

expression.GetTableTitle();

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get the table title.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTablePr = oTableStyle.GetTablePr();
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTablePr.SetTableTitle("Table 1");
oTable.SetStyle(oTableStyle);
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("Table title: " + oTablePr.GetTableTitle());
oDocument.Push(oTable);
```
