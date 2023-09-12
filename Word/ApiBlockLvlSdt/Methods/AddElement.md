# AddElement

Adds a paragraph or a table or a block content control to the current container.

## Syntax

expression.AddElement(oElement, nPos);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The type of the element which will be added to the current container. |
| nPos | Required | Number | The type of the element which will be added to the current container. |

## Returns

Boolean (returns false if oElement unsupported)

## Example

This example adds a paragraph to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.AddElement(oParagraph, 0);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```