# ReplaceByElement

Replaces the current paragraph with a new element.

## Syntax

expression.ReplaceByElement(oElement);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [DocumentElement](../../../Enumerations/DocumentElement.md) | The element to replace the current paragraph with. |

## Returns

Boolean

## Example

This example replaces the paragraph with a block level content control.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
var oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.GetContent().GetElement(0).AddText("The paragraph was replaced with the current content control.");
oParagraph.ReplaceByElement(oBlockLvlSdt);
builder.SaveFile("docx", "ReplaceByElement.docx");
builder.CloseFile();
```