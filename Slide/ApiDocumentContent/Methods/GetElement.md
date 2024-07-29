# GetElement

Returns an element by its position in the document.

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../Enumeration/DocumentElement.md)

## Example

This example shows how to get an element by its position in the document content.

```javascript
var oDocument = Api.GetDocument();
var oSection = oDocument.GetFinalSection();
var oDocContent = oSection.GetHeader("default", true);
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is the text in the default header");
```
