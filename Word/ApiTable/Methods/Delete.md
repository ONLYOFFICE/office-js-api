# Delete

Deletes the current table.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the table.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oTable.Delete();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The table was removed from the document.");
oDocument.Push(oParagraph);
```
