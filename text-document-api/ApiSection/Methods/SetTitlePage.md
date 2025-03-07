# SetTitlePage

Specifies whether the current section in this document has the different header and footer for the section first page.

## Syntax

```javascript
expression.SetTitlePage(isTitlePage);
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTitlePage | Required | boolean |  | If true, the first page of the section will have header and footer that will differ from the other pages of the same section. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the current section in this document has the different header and footer for the section first page.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page does not have a footer, as it is a title page. ");
paragraph.AddText("Scroll down the page to see if the footer was removed.");
let section = doc.CreateSection(paragraph);
section.SetTitlePage(true);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer. ");
paragraph.AddText("You will only see it for page #2.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is page #2 and it has a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);
```
