# SetEvenAndOddHdrFtr

Specifies whether sections in this document will have different headers and footers for even and
odd pages (one header/footer for odd pages and another header/footer for even pages).

## Syntax

expression.SetEvenAndOddHdrFtr(isEvenAndOdd);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isEvenAndOdd | Required | boolean |  | If true the header/footer will be different for odd and even pages, if false they will be the same. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether sections in this document will have different headers and footers for even and odd pages.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.CreateSection(paragraph);
paragraph.AddText("This is section #1 of the document. ");
paragraph.AddText("It has a header and a footer for odd pages. ");
paragraph.AddText("Scroll down to see the other pages.");
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is an odd page header");
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is an odd page footer");
doc.SetEvenAndOddHdrFtr(true);
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #2 of the document. ");
paragraph.AddText("It has a header and a footer for even pages. ");
paragraph.AddText("Scroll down to see the other pages.");
doc.Push(paragraph);
section = doc.CreateSection(paragraph);
section.SetType("evenPage");
header = section.GetHeader("even", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is an even page header");
footer = section.GetFooter("even", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is an even page footer");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #3 of the document. ");
paragraph.AddText("It has a header and a footer for odd pages. ");
paragraph.AddText("Scroll down to see the other pages.");
doc.Push(paragraph);
section = doc.CreateSection(paragraph);
section.SetType("oddPage");
section = doc.GetFinalSection();
section.SetType("evenPage");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is section #4 of the document. ");
paragraph.AddText("It has a header and a footer for even pages.");
doc.Push(paragraph);

```
