# SetTitlePage

Specifies whether the current section in this document has the different header and footer for the section first page.

## Syntax

expression.SetTitlePage(isTitlePage);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| isTitlePage | Required | Boolean | If true, the first page of the section will have header and footer that will differ from the other pages of the same section. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the current section in this document has the different header and footer for the section first page.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This page does not have a footer, as it is a title page. ");
oParagraph.AddText("Scroll down the page to see if the footer was removed.");
var oSection = oDocument.CreateSection(oParagraph);
oSection.SetTitlePage(true);
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is page footer. ");
oParagraph.AddText("You will only see it for page #2.");
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is page #2 and it has a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetTitlePage.docx");
builder.CloseFile();
```