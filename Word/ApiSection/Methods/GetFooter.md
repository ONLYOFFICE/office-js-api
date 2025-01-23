# GetFooter

Returns the content for the specified footer type.

## Syntax

expression.GetFooter(sType, isCreate);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | Footer type to get the content from. |
| isCreate | Optional | boolean | false | Specifies whether to create a new footer or not with the specified footer type in case no footer with such a type could be found in the current section. |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get the content for the specified footer type.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a page with a footer. ");
paragraph.AddText("Scroll down the page to see it.");
let section = doc.GetFinalSection();
let footer = section.GetFooter("default", true);
paragraph = footer.GetElement(0);
paragraph.AddText("This is a page footer");
```
