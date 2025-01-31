# GetSpacing

Gets the text spacing from the current text properties measured in twentieths of a point.

## Syntax

```javascript
expression.GetSpacing();
```

`expression` - A variable that represents a [ApiRun](../ApiRun.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)

## Example



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
oRun.AddText("This is just a sample text. ");
oRun.AddText("The text properties are changed and the style is added to the paragraph. ");
oRun.AddLineBreak();
oParagraph.AddElement(oRun);
var oTextPr = oRun.GetTextPr();
oTextPr.SetSpacing(80);
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
var nSpacing = oTextPr.GetSpacing();
oParagraph.AddText("Text spacing: " + nSpacing);
oDocContent.Push(oParagraph);
```
