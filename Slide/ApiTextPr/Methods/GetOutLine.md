# GetOutLine

Gets the text outline from the current text properties.

## Syntax

```javascript
expression.GetOutLine();
```

`expression` - A variable that represents a [ApiTextPr](../ApiTextPr.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiStroke](../../ApiStroke/ApiStroke.md)

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
oStroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
oTextPr.SetOutLine(oStroke);
oSlide.AddObject(oShape);
oParagraph = Api.CreateParagraph();
oStroke = oTextPr.GetOutLine();
var sType = oStroke.GetClassType();
oParagraph.AddText("Text outline type: " + sType);
oDocContent.Push(oParagraph);
```
