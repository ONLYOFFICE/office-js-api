# SlidesToJSON

Converts the slides from the current ApiPresentation object into the JSON objects.

## Syntax

expression.SlidesToJSON(nStart, nStart, bWriteLayout, bWriteMaster, bWriteAllMasLayouts, bWriteTableStyles);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nStart | Optional | bool | false | The index to the start slide. |
| nStart | Optional | bool | ApiPresentation.GetSlidesCount() - 1 | The index to the end slide. |
| bWriteLayout | Optional | bool | false | Specifies if the slide layout will be written to the JSON object or not. |
| bWriteMaster | Optional | bool | false | Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false). |
| bWriteAllMasLayouts | Optional | bool | false | Specifies if all child layouts from the slide master will be written to the JSON object or not. |
| bWriteTableStyles | Optional | bool | false | Specifies whether to write used table styles to the JSON object (true) or not (false). |

## Returns

JSON[]

## Example

This example shows how to convert the slides from the current ApiPresentation object into the JSON objects.

```javascript
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var json = oPresentation.SlidesToJSON(0, 0, true, true, true, true);
var aSlidesFromJSON = Api.FromJSON(json);
var oSlideFromJSON = aSlidesFromJSON[0];
oPresentation.AddSlide(oSlideFromJSON);
var sType = oSlideFromJSON.GetClassType();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oDrawing.SetPosition(608400, 1267200);
oDrawing.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawing);
var oDocContent = oDrawing.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("Class type = " + sType);
```
