# GetHeight

Returns the slide height in English measure units.

## Syntax

expression.GetHeight();

`expression` - A variable that represents a [ApiSlide](../ApiSlide.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[EMU](../../../Enumerations/Emu.md)

## Example

This example shows how to get the slide height in English measure units.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
oPresentation.SetSizes(254 * 36000, 190 * 36000);
var oSlide = oPresentation.GetCurrentSlide();
oSlide.RemoveAllObjects();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("rect", 200 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var nSlideHeight = oSlide.GetHeight();
oParagraph.AddText("The slide height = " + nSlideHeight / 36000 + " mm");
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "GetHeight.pptx");
builder.CloseFile();
```