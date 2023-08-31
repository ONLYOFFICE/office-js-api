# AddColumnBreak

Adds a column break to the current position and starts the next element from a new column.

## Syntax

expression.AddColumnBreak();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example adds a column break to the current position and starts the next element from a new column.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.GetFinalSection();
oSection.SetEqualColumns(2, 720);
var oRun = oParagraph.AddText("This is the text for the first column. It is written all in one text run. Nothing special.");
oParagraph.AddColumnBreak();
oRun = oParagraph.AddText("This is the text which starts from the beginning of the second column. ");
oRun = oParagraph.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
builder.SaveFile("docx", "AddColumnBreak.docx");
builder.CloseFile();
```