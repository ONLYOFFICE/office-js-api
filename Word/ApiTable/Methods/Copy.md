# Copy

Creates a copy of the current table.

## Syntax

expression.Copy();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTable](../ApiTable.md)

## Example

This example creates a copy of the table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered"));
var oTable = Api.CreateTable(2, 2);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
var oCopyTable = oTable.Copy();
oDocument.Push(oCopyTable);
builder.SaveFile("docx", "Copy.docx");
builder.CloseFile();
```