# GetIndLeft

Returns the paragraph left side indentation.
<br>Inherited From: [ApiParaPr#GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)

## Syntax

expression.GetIndLeft();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md) &#124; undefined

## Example

This example shows how to get the paragraph left side indentation.

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
oParagraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes.");
oParagraph.SetIndLeft(2880);
var nIndLeft = oParagraph.GetIndLeft();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Left indent: " + nIndLeft);
oDocContent.Push(oParagraph);
builder.SaveFile("pptx", "GetIndLeft.pptx");
builder.CloseFile();
```