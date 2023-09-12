# AddElement

Adds an element to the current paragraph.

## Syntax

expression.AddElement(oElement, nPos?);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../../Enumerations/ParagraphContent.md) | The document element which will be added at the current position. Returns false if the oElement type is not supported by a paragraph. |
| nPos | Optional | Number | The position where the current element will be added. If this value is not specified, then the element will be added at the end of the current paragraph. Default value is "null". |

## Returns

Boolean (returns "false" if the type of "oElement" is not supported by paragraph content)

## Example

This example adds a Run to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a text run. Nothing special.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```