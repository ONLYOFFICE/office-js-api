# GetSlideByIndex

Returns a slide by its position in the presentation.

## Syntax

expression.GetSlideByIndex(nIndex);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | Number | The slide number (position) in the presentation. |

## Returns

[ApiSlide](../../ApiSlide/ApiSlide.md) &#124; null

## Example

This example shows how to get a slide by its position in the presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetSlideByIndex.pptx");
builder.CloseFile();
```