# GetElement

Returns an element by its position in the document.<br>Inherited From: [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md)

## Syntax

expression.GetElement(nPos);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The element position that will be taken from the document. |

## Returns

[DocumentElement](../../../Enumerations/DocumentElement.md) &#124; null

## Example

This example shows how to get an element by its position in the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. Nothing special.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "GetElement.docx");
builder.CloseFile();
```