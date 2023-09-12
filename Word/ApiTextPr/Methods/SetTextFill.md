# SetTextFill

Sets the text fill to the current text run.

## Syntax

expression.SetTextFill(oApiFill);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the text fill to the current text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetTextFill(oFill);
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the black text.");
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetTextFill.docx");
builder.CloseFile();
```