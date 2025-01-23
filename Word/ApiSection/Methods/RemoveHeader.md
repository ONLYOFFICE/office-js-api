# RemoveHeader

Removes the header of the specified type from the current section. After removal, the header will be inherited from
the previous section, or if this is the first section in the document, no header of the specified type will be presented.

## Syntax

expression.RemoveHeader(sType);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | Header type to be removed. |

## Returns

This method doesn't return any data.

## Example

This example removes the header of the specified type from the section.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This page first was with a header. ");
paragraph.AddText("The header has been removed, you cannot see it. ");
paragraph.AddText("Scroll down to the next page to see the header there.");
let section = doc.CreateSection(paragraph);
let header = section.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is page header #1. ");
paragraph.AddText("You will not see it, as it will be removed.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a page with a header. ");
doc.Push(paragraph);
let section1 = doc.GetFinalSection();
header = section1.GetHeader("default", true);
paragraph = header.GetElement(0);
paragraph.AddText("This is page header #2. ");
paragraph.AddText("Only this header can be seen, as the first one has been removed.");
section.RemoveHeader("default");
```
