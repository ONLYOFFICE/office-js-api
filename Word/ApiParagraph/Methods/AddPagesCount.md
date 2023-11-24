# AddPagesCount

Inserts a number of pages in the current document into the paragraph.

## Syntax

expression.AddPagesCount();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

This example inserts a number of pages in the current document into the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("First page");
oParagraph.AddPageBreak();
oParagraph.AddText("Second page");
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("Page ");
oParagraph.AddPageNumber();
oParagraph.AddText(" of ");
oParagraph.AddPagesCount();
builder.SaveFile("docx", "AddPagesCount.docx");
builder.CloseFile();
```