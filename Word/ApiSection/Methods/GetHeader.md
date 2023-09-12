# GetHeader

Returns the content for the specified header type.

## Syntax

expression.GetHeader(sType, isCreate?);

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [HdrFtrType](../../../Enumerations/HdrFtrType.md) | Header type to get the content from. |
| isCreate | Optional | Boolean | Specifies whether to create a new header or not with the specified header type in case no header with such a type could be found in the current section. Default value is "false". |

## Returns

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md) &#124; null

## Example

This example shows how to get the content for the specified header type.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is a page with a header. ");
oParagraph.AddText("See it above.");
var oSection = oDocument.GetFinalSection();
var oHeader = oSection.GetHeader("default", true);
oParagraph = oHeader.GetElement(0);
oParagraph.AddText("This is a page header");
builder.SaveFile("docx", "GetHeader.docx");
builder.CloseFile();
```