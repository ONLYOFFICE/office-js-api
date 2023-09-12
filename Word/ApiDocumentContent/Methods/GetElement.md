# GetElement

Returns an element by its position in the document.

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../../Enumerations/DocumentElement.md) &#124; null

## Example

This example shows how to get an element by its position in the document content.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oSection = oDocument.GetFinalSection();
var oDocContent = oSection.GetHeader("default", true);
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("This is the text in the default header");
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();
```