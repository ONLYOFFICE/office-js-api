# AddElement

Adds a paragraph or a table or a block content control to the current container.

## Syntax

expression.AddElement(oElement, nPos?);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [	ParagraphContent	](../../../Enumerations/	ParagraphContent	.md) | The type of the element which will be added to the current container. |
| nPos | Optional | Number | The type of the element which will be added to the current container. Default value is "oInlineLvlSdt.GetElementsCount() - 1". |

## Returns

Boolean

## Example

This example adds a run to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control with a text run in it.");
oInlineLvlSdt.AddElement(oRun, 0);
builder.SaveFile("docx", "AddElement.docx");
builder.CloseFile();
```