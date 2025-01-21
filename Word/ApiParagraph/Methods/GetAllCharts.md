# GetAllCharts

Returns a collection of chart objects in the paragraph.

## Syntax

expression.GetAllCharts();

`expression` - A variable that represents a [ApiParagraph](../ApiParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

Array.\<[ApiChart](../../ApiChart/ApiChart.md)>

## Example

This example shows how to get a collection of chart objects in the paragraph.

```javascript
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart1 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oParagraph.AddDrawing(oChart1);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart1.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart1.SetSeriesFill(oFill, 1, false);
var oChart2 = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart2.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart2.SetSeriesFill(oFill, 1, false);
oChart2.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart2);
var aCharts = oParagraph.GetAllCharts();
var oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
aCharts[1].SetMinorHorizontalGridlines(oStroke);
```
