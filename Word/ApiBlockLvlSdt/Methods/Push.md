# Push

Pushes a paragraph or a table or a block content control to actually add it to the current container.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The type of the element which will be pushed to the current container. |

## Returns

Boolean (returns false if oElement unsupported)

## Example

This example pushes a paragraph to actually add it to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a block text content control.");
oBlockLvlSdt.Push(oParagraph);
oDocument.AddElement(0, oBlockLvlSdt);
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();
```