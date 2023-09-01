# SetTextFill

Sets the text fill to the current text run.
<br>Inherited From: [ApiTextPr#SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)

## Syntax

expression.SetTextFill(oApiFill);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oApiFill | Required | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the text color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example sets the text fill to the current text run.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oRun.SetTextFill(oFill);
oRun.AddText("This is a text run with the black text.");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetTextFill.docx");
builder.CloseFile();
```