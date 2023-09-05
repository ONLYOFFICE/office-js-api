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
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text raised 10 half-points.");
oParagraph.AddElement(oRun);
oRun.SetPosition(10);
oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text lowered 16 half-points.");
oParagraph.AddElement(oRun);
oRun.SetPosition(-16);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetPosition.pptx");
builder.CloseFile();
```