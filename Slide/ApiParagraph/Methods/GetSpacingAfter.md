# GetSpacingAfter

Returns the spacing after value of the current paragraph.
<br>Inherited From: [ApiParaPr#GetSpacingAfter](../../ApiParaPr/Methods/SetSpacingAfter.md)

## Syntax

expression.GetSpacingAfter();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[twips](../../../Enumerations/twips.md)

## Example

This example shows how to get the spacing after value of the current paragraph.

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
var oParagraph1 = oDocContent.GetElement(0);
oParagraph1.AddText("This is an example of setting a space after a paragraph. ");
oParagraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
oParagraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
oParagraph1.SetSpacingAfter(1440);
var oParagraph2 = Api.CreateParagraph();
oParagraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
oParagraph2.AddLineBreak();
var nSpacingAfter = oParagraph1.GetSpacingAfter();
oParagraph2.AddText("Spacing after: " + nSpacingAfter);
oDocContent.Push(oParagraph2);
builder.SaveFile("pptx", "GetSpacingAfter.pptx");
builder.CloseFile();
```