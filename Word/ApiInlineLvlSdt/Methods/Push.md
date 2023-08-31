# Push

Adds an element to the end of inline text content control.

## Syntax

expression.Push(oElement);

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oElement | Required | [ParagraphContent](../../../Enumerations/ParagraphContent.md) | The type of the element which will be pushed to the current container. |

## Returns

Boolean

## Example

This example pushes a run to actually add it to the container.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control. ");
oInlineLvlSdt.AddElement(oRun, 0);
oRun = Api.CreateRun();
oRun.AddText("This sentence was pushed here.");
oInlineLvlSdt.Push(oRun);
builder.SaveFile("docx", "Push.docx");
builder.CloseFile();
```