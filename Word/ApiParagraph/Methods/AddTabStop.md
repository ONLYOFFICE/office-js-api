# AddTabStop

Adds a tab stop to the current paragraph.

## Syntax

expression.AddTabStop();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds a tab stop to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text. After it three tab stops will be added.");
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddTabStop();
oParagraph.AddText("This is the text which starts after the tab stops.");
builder.SaveFile("docx", "AddTabStop.docx");
builder.CloseFile();
```