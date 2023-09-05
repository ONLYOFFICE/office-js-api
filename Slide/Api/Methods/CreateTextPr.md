# CreateTextPr

Creates the empty text properties.

## Syntax

expression.CreateTextPr();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## Example

This example shows how to create a text properties and use it.

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
oDocContent.RemoveAllElements();
var oTextPr = Api.CreateTextPr();
oTextPr.SetFontSize(50);
oTextPr.SetBold(true);
var oParagraph = Api.CreateParagraph();
oParagraph.SetJc("left");
var oRun = Api.CreateRun();
oRun.AddText("This is a sample text with the font size set to 25 points and the font weight set to bold.");
oRun.SetTextPr(oTextPr);
oParagraph.AddElement(oRun);
oDocContent.Push(oParagraph);
oSlide.AddObject(oShape);
builder.SaveFile("pptx", "CreateTextPr.pptx");
builder.CloseFile();
```