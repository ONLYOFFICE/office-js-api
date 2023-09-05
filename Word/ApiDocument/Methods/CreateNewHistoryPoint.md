# CreateNewHistoryPoint

Creates a new history point.

## Syntax

expression.CreateNewHistoryPoint();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example creates a new history point.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a sample text.");
oDocument.CreateNewHistoryPoint();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("New history point was just created.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "CreateNewHistoryPoint.docx");
builder.CloseFile();
```