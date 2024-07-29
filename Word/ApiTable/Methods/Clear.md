# Clear

Clears the content from the table.

## Syntax

expression.Clear();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the content from the table.

```javascript
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oTable.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
oDocument.Push(oTable);
oTable.Clear();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The content of the table was cleared.");
oDocument.Push(oParagraph);
```
