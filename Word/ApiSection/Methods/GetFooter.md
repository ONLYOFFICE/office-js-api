# GetFooter

Returns the content for the specified footer type.

## Syntax

expression.GetFooter(sType, isCreate?);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../../Enumerations/HdrFtrType.md) | Footer type to get the content from. |
| isCreate | Optional | Boolean | Specifies whether to create a new footer or not with the specified footer type in case no footer with such a type could be found in the current section. Default value is "false". |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) &#124; null

## Example

This example shows how to get the content for the specified footer type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a footer. ");
oParagraph.AddText("Scroll down the page to see it.");
var oSection = oDocument.GetFinalSection();
var oFooter = oSection.GetFooter("default", true);
oParagraph = oFooter.GetElement(0);
oParagraph.AddText("This is a page footer");
builder.SaveFile("docx", "GetFooter.docx");
builder.CloseFile();
```