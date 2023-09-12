# CreateShape

Creates a shape with the parameters specified.

## Syntax

expression.CreateShape(sType?, nWidth?, nHeight?, oFill?, oStroke?);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Optional | [ShapeType](../../../Enumerations/ShapeType.md) | The shape type which specifies the preset shape geometry. Default value is "rect". |
| nWidth | Optional | [EMU](../../../Enumerations/Emu.md) | The shape width in English measure units. Default value is "914400". |
| nHeight | Optional | [EMU](../../../Enumerations/Emu.md) | The shape height in English measure units. Default value is "914400". |
| oFill | Optional | [ApiFill](../../ApiFill/ApiFill.md) | The color or pattern used to fill the shape. Default value is "Api.CreateNoFill()". |
| oStroke | Optional | [ApiStroke](../../ApiStroke/ApiStroke.md) | The stroke used to create the element shadow. Default value is "Api.CreateStroke(0, Api.CreateNoFill())". |

## Returns

[ApiShape](../../ApiShape/ApiShape.md)

## Example

This example creates a shape using the 'flowChartMagneticTape' preset.

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
oRun.SetFontSize(60);
oRun.AddText("This is just a sample text. ");
oParagraph.AddElement(oRun);
oRun = Api.CreateRun();
oRun.SetFontSize(60);
oRun.SetFontFamily("Comic Sans MS");
oRun.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
oParagraph.AddElement(oRun);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "CreateShape.pptx");
builder.CloseFile();
```