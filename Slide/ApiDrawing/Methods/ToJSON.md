# ToJSON

Converts the ApiDrawing object into the JSON object.

## Syntax

expression.ToJSON();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

JSON

## Example

This example converts the shape into JSON.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
var json = oDrawing.ToJSON();
var oDrawingFromJSON = Api.FromJSON(json);
oDrawingFromJSON.SetPosition(608400, 1267200);
oDrawingFromJSON.SetSize(300 * 36000, 130 * 36000);
oSlide.AddObject(oDrawingFromJSON);
builder.SaveFile("pptx", "ToJSON.pptx");
builder.CloseFile();
```