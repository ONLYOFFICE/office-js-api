# Delete

Deletes the specified drawing object from the parent.

## Syntax

expression.Delete();

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Boolean (returns false if drawing doesn't exist or drawing hasn't a parent)

## Example

This example shows how to delete a drawing object.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oSlide.AddObject(oDrawing1);
var oDrawing2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oDrawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing2.SetHorAxisTitle("Year", 11);
oDrawing2.SetLegendPos("bottom");
oDrawing2.SetShowDataLabels(false, false, true, false);
oDrawing2.SetTitle("Financial Overview", 13);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oDrawing2.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oDrawing2.SetSeriesFill(oFill, 1, false);
oSlide.AddObject(oDrawing2);
oDrawing2.Delete();
var oDocContent = oDrawing1.GetDocContent();
var oParagraph = oDocContent.GetElement(0);
oParagraph.SetJc("left");
oParagraph.AddText("The chart was deleted from this slide.");
builder.SaveFile("pptx", "Delete.pptx");
builder.CloseFile();
```