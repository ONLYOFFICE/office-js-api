# AddInlineLvlSdt

Adds an inline container.

## Syntax

expression.AddInlineLvlSdt(oSdt);

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oSdt | Required | [ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | An inline container. If undefined or null, then new class ApiInlineLvlSdt will be created and added to the paragraph. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example adds an inline container to the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oInlineLvlSdt = Api.CreateInlineLvlSdt();
var oRun = Api.CreateRun();
oRun.AddText("This is an inline text content control.");
oInlineLvlSdt.AddElement(oRun, 0);
oParagraph.AddInlineLvlSdt(oInlineLvlSdt);
builder.SaveFile("docx", "AddInlineLvlSdt.docx");
builder.CloseFile();
```