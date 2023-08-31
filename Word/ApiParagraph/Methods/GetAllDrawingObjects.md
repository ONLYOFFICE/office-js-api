# GetAllDrawingObjects

Returns a collection of drawing objects in the paragraph.

## Syntax

expression.GetAllDrawingObjects();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parametrs

This method doesn't have any parameters

## Returns

Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)>

## Example

This example shows how to get a collection of drawing objects in the paragraph.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oGs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
var oGs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
var oFill = Api.CreateLinearGradientFill([oGs1, oGs2], 5400000);
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing1 = Api.CreateShape("rect", 3212465, 963295, oFill, oStroke);
oParagraph.AddDrawing(oDrawing1);
var oDrawing2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oDrawing2.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oDrawing2.SetSeriesFill(oFill, 1, false);
oDrawing2.SetVerAxisTitle("USD In Hundred Thousands", 10);
oDrawing2.SetHorAxisTitle("Year", 11);
oDrawing2.SetLegendPos("bottom");
oDrawing2.SetShowDataLabels(false, false, true, false);
oDrawing2.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oDrawing2);
var aDrawings = oParagraph.GetAllDrawingObjects();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
aDrawings[0].Fill(oFill);
builder.SaveFile("docx", "GetAllDrawingObjects.docx");
builder.CloseFile();
```