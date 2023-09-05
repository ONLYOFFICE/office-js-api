# SetPosition

Sets the position of the drawing on the slide.

## Syntax

expression.SetPosition(nPosX, nPosY);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nPosX | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the left side of the slide to the left side of the drawing measured in English measure units. |
| nPosY | Required | [EMU](../../../Enumerations/Emu.md) | The distance from the top side of the slide to the upper side of the drawing measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets position to the shape.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oShape.SetSize(300 * 36000, 130 * 36000);
var oDocContent = oShape.GetDocContent();
oDocContent.RemoveAllElements();
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
oParagraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "SetPosition.pptx");
builder.CloseFile();
```