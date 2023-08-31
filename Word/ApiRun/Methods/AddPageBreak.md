# AddPageBreak

Adds a page break and starts the next element from a new page.

## Syntax

expression.AddPageBreak();

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example adds a page break and starts the next element from a new page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is the text for the first page. After it a page break will be added. Scroll down to the second page to see the text there.");
oRun.AddPageBreak();
oRun.AddText("This is the text which starts from the beginning of the second page. ");
oRun.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddPageBreak.docx");
builder.CloseFile();
```