# AddLineBreak

Adds a line break to the current position and starts the next element from a new line.

## Syntax

expression.AddLineBreak();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds a line break to the current position and starts the next element from a new line.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = oParagraph.AddText("This is the text for the first line. Nothing special.");
oParagraph.AddLineBreak();
oRun = oParagraph.AddText("This is the text which starts from the beginning of the second line. ");
oRun = oParagraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
builder.SaveFile("docx", "AddLineBreak.docx");
builder.CloseFile();
```