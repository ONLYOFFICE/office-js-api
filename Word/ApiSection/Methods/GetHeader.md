# GetHeader

Returns the content for the specified header type.

## Syntax

expression.GetHeader(sType, isCreate);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | HdrFtrType |  | Header type to get the content from. |
| isCreate | Optional | boolean | false | Specifies whether to create a new header or not with the specified header type in caseno header with such a type could be found in the current section. |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## Example

This example shows how to get the content for the specified header type.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a header. ");
oParagraph.AddText("See it above.");
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is a page header");
```
