# SetOutLine

Sets the text outline to the current text run.

## Syntax

expression.SetOutLine(oStroke);

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the text outline. |

## Returns

[ApiTextPr](../ApiTextPr.md)

## Example

This example sets the text outline to the current text run

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oStroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
var oTextPr = oDocument.GetDefaultTextPr();
oTextPr.SetOutLine(oStroke);
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the black text outline.");
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetOutLine.docx");
builder.CloseFile();
```