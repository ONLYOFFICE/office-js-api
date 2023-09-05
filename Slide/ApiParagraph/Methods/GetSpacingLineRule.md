# GetSpacingLineRule

Returns the paragraph line spacing rule.
<br>Inherited From: [ApiParaPr#GetSpacingLineRule](../../ApiParaPr/Methods/GetSpacingLineRule.md)

## Syntax

expression.GetSpacingLineRule();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[LineSpacingRule](../../../Enumerations/LineSpacingRule.md)

## Example

This example shows how to get the paragraph line spacing rule.

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
oParagraph.SetSpacingLine(3 * 240, "auto");
oParagraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
oParagraph.AddLineBreak();
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
oParagraph.AddLineBreak();
var sSpacingLineRule = oParagraph.GetSpacingLineRule();
oParagraph.AddText("Spacing line rule: " + sSpacingLineRule);
builder.SaveFile("pptx", "GetSpacingLineRule.pptx");
builder.CloseFile();
```