# SetHighlight

Specifies a highlighting color which is applied as a background to the contents of the current run.

## Syntax

expression.SetHighlight(sColor);

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sColor | Required | [highlightColor](../../../Enumerations/highlightColor.md) | Available highlight color. |

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example specifies a highlighting color which is applied as a background to the contents of the run.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oRun = Api.CreateRun();
oRun.AddText("This is a text run with the text highlighted with light gray color.");
oParagraph.AddElement(oRun);
oRun.SetHighlight("lightGray");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetHighlight.pptx");
builder.CloseFile();
```