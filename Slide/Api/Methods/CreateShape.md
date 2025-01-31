# CreateShape

Creates a shape with the parameters specified.

## Syntax

```javascript
expression.CreateShape(sType, nWidth, nHeight, oFill, oStroke);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | The shape type which specifies the preset shape geometry. |
| nWidth | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape width in English measure units. |
| nHeight | Optional | [EMU](../../Enumeration/EMU.md) | 914400 | The shape height in English measure units. |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | The color or pattern used to fill the shape. |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | The stroke used to create the element shadow. |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example creates a shape using the 'flowChartMagneticTape' preset.

```javascript
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
oRun.SetFontSize(60);
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontSize(60);
oRun.SetFontFamily("Comic Sans MS");
oRun.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);
```
