# SetSizes

Sets the size to the current presentation.

## Syntax

expression.SetSizes(nWidth, nHeight);

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The presentation width in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The presentation height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the size to the current presentation.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.AddText("The size of this presentation was changed: width - 254 mm, height - 190 mm.");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetSizes.pptx");
builder.CloseFile();
```