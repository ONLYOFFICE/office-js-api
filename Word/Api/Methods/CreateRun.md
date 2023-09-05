# CreateRun

Creates a new smaller text block to be inserted to the current paragraph or table.

## Syntax

expression.CreateRun();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example creates a run and inserts it into the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "CreateRun.docx");
builder.CloseFile();
```