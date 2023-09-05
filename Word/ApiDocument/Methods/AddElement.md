# AddElement

Adds a paragraph or a table or a blockLvl content control using its position in the document content.<br>Inherited From: [ApiDocumentContent#AddElement](../../ApiDocumentContent/Methods/AddElement.md)

## Syntax

expression.AddElement(nPos, oElement);

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPos | Required | Number | The position where the current element will be added. |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The document element which will be added at the current position. |

## Returns

This method doesn't return any data.

## Example

This example adds a paragraph to the document.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = Api.CreateParagraph();
var oRun = Api.CreateRun();
oRun.AddText("Number of paragraph elements at this point: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
oRun.AddText("Number of paragraph elements after we added a text run: ");
oRun.AddTabStop();
oRun.AddText("" + oParagraph.GetElementsCount());
oDocument.AddElement(0, oParagraph);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```