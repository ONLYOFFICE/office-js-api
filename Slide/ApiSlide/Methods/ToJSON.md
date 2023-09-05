# ToJSON

Converts the ApiSlide object into the JSON object.

## Syntax

expression.ToJSON(bWriteLayout?, bWriteMaster?, bWriteAllMasLayouts?, bWriteTableStyles?);

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bWriteLayout | Optional | Boolean | Specifies if the slide layout will be written to the JSON object or not. Default value is "false". |
| bWriteMaster | Optional | Boolean | Specifies if the slide master will be written to the JSON object or not (bWriteMaster is false if bWriteLayout === false). Default value is "false". |
| bWriteAllMasLayouts | Optional | Boolean | Specifies if all child layouts from the slide master will be written to the JSON object or not. Default value is "false". |
| bWriteTableStyles | Optional | Boolean | Specifies whether to write used table styles to the JSON object (true) or not (false). Default value is "false". |

## Returns

JSON

## Example

This example converts the ApiSlide object into the JSON object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var json = oSlide.ToJSON(true, true, true, true);
var oSlideFromJSON = Api.FromJSON(json);
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
builder.SaveFile("pptx", "ToJSON.pptx");
builder.CloseFile();
```