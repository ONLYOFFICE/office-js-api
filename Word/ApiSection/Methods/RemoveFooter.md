# RemoveFooter

Removes the footer of the specified type from the current section. After removal, the footer will be inherited from 
the previous section, or if this is the first section in the document, no footer of the specified type will be presented.

## Syntax

expression.RemoveFooter(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | Footer type to be removed. |

## Returns

This method doesn't return any data.

## Example

This example removes the footer of the specified type from the section.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page first was with a footer. ");
paragraph.AddText("Scroll down the page to see if it was removed.");
let section = doc.CreateSection(paragraph);
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #1. ");
paragraph.AddText("You will not see it, as it will be removed.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
doc.Push(paragraph);
let section1 = doc.GetFinalSection();
footer = section1.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is page footer #2. ");
paragraph.AddText("Only this footer can be seen, as the first one has been removed.");
section.RemoveFooter("default");
```
