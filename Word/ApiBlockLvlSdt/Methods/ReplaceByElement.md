# ReplaceByElement

Replaces the current content control with a new element.

## Syntax

expression.ReplaceByElement(oElement);

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The element to replace the current content control with. |

## Returns

Boolean

## Example

This example replaces the content control with a paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.SetPlaceholderText("Name");
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("The content control was replaced with the current paragraph.");
oBlockLvlSdt.ReplaceByElement(oParagraph);
builder.SaveFile("docx", "ReplaceByElement.docx");
builder.CloseFile();
```