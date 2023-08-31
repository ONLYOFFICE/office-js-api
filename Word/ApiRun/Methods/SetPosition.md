# SetPosition

Specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.

## Syntax

expression.SetPosition(nPosition);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPosition | Required | [hps](../../../Enumerations/hps.md) | Specifies a positive (raised text) or negative (lowered text) measurement in half-points (1/144 of an inch). |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies an amount by which text is raised or lowered for this run in relation to the default baseline of the surrounding non-positioned text.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetPosition(10);
oRun.AddText("This is a text run with the text raised 5 points (10 half-points).");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetPosition(-16);
oRun.AddText("This is a text run with the text lowered 8 points (16 half-points).");
oParagraph.AddElement(oRun);
builder.SaveFile("docx", "SetPosition.docx");
builder.CloseFile();
```