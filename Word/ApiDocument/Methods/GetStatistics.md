# GetStatistics

Returns the document statistics represented as an object with the following parameters.

## Syntax

expression.GetStatistics();

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Object
<br>Returns the document statistics represented as an object with the following parameters:
- PageCount - number of pages;
- WordsCount - number of words;
- ParagraphCount - number of paragraphs;
- SymbolsCount - number of symbols;
- SymbolsWSCount - number of symbols with spaces.

## Example

This example shows how to get the document statistics represented as an object.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oStatistics = oDocument.GetStatistics();
oParagraph.AddLineBreak();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Document statistics");
oParagraph.SetBold(true);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Pages: " + oStatistics.PageCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Words: " + oStatistics.WordsCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Paragraphs: " + oStatistics.ParagraphCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Symbols: " + oStatistics.SymbolsCount);
oDocument.Push(oParagraph);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Symbols with spaces: " + oStatistics.SymbolsWSCount);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetStatistics.docx");
builder.CloseFile();
```