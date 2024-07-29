# GetFooter

Returns the content for the specified footer type.

## Syntax

expression.GetFooter(sType, isCreate);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../Enumeration/HdrFtrType.md) |  | Footer type to get the content from. |
| isCreate | Optional | boolean | false | Specifies whether to create a new footer or not with the specified footer type in caseno footer with such a type could be found in the current section. |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get the content for the specified footer type.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is a page footer");
```
