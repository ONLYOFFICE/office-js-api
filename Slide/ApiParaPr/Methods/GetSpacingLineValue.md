# GetSpacingLineValue

Returns the paragraph line spacing value.

## Syntax

expression.GetSpacingLineValue();

`expression` - A variable that represents a [ApiParaPr](../ApiParaPr.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md) &#124; [line240](../../../Enumerations/line240.md) &#124; undefined

## Example

This example shows how to get the paragraph line spacing value.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateRadialGradientFill([oGs1, oGs2]);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oShape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, oFill, oStroke);
oShape.SetPosition(608400, 1267200);
oSlide.AddObject(oShape);
var oDocContent = oShape.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
var oParaPr = oParagraph.GetParaPr();
oParaPr.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
var nSpacingLineValue = oParaPr.GetSpacingLineValue();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Spacing line value : " + nSpacingLineValue);
oDocContent.Push(oParagraph);
builder.SaveFile("pptx", "GetSpacingLineValue.pptx");
builder.CloseFile();
```