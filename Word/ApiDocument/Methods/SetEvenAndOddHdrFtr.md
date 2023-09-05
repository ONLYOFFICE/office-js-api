# SetEvenAndOddHdrFtr

Specifies whether sections in this document will have different headers and footers for even and odd pages (one header/footer for odd pages and another header/footer for even pages).

## Syntax

expression.SetEvenAndOddHdrFtr(isEvenAndOdd);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isEvenAndOdd | Required | Boolean | If true the header/footer will be different for odd and even pages, if false they will be the same. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether sections in this document will have different headers and footers for even and odd pages.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oSection = oDocument.CreateSection(oParagraph);
oParagraph.AddText("This is section #1 of the document. ");
oParagraph.AddText("It has a header and a footer for odd pages. ");
oParagraph.AddText("Scroll down to see the other pages.");
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is an odd page header");
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is an odd page footer");
oDocument.SetEvenAndOddHdrFtr(true);
oParagraph = Api.CreateParagraph();
oSection = oDocument.CreateSection(oParagraph);
oSection.SetType("evenPage");
oParagraph.AddText("This is section #2 of the document. ");
oParagraph.AddText("It has a header and a footer for even pages. ");
oParagraph.AddText("Scroll down to see the other pages.");
oDocument.Push(oParagraph);
oHeader = oSection.GetHeader("even", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is an even page header");
oFooter = oSection.GetFooter("even", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is an even page footer");
oParagraph = Api.CreateParagraph();
oSection = oDocument.CreateSection(oParagraph);
oSection.SetType("oddPage");
oParagraph.AddText("This is section #3 of the document. ");
oParagraph.AddText("It has a header and a footer for odd pages. ");
oParagraph.AddText("Scroll down to see the other pages.");
oDocument.Push(oParagraph);
oSection = oDocument.GetFinalSection();
oSection.SetType("evenPage");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is section #4 of the document. ");
oParagraph.AddText("It has a header and a footer for even pages.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetEvenAndOddHdrFtr.docx");
builder.CloseFile();
```