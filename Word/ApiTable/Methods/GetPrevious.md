# GetPrevious

Returns the previous table if exists.

## Syntax

expression.GetPrevious();

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTable](../ApiTable.md) &#124; null (returns null if table is first)

## Example

This example shows how to get the previous table.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oTable = Api.CreateTable(3, 3);
oDocument.Push(oTable);
oTable.SetWidth("percent", 100);
var oNextTable = Api.CreateTable(2, 2);
oNextTable.SetWidth("percent", 100);
oDocument.Push(oNextTable);
oTable = oNextTable.GetPrevious();
oTable.SetWidth("percent", 50);
builder.SaveFile("docx", "CreateTable.docx");
builder.CloseFile();
```