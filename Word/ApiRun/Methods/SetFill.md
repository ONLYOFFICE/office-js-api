# SetFill

Sets the text color to the current text run.

## Syntax

expression.SetFill(oApiFill);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text color to the current text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the font color set to orange.");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oRun.SetFill(oFill);
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetFill.docx");
builder.CloseFile();
```