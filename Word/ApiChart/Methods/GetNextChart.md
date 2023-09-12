# GetNextChart

Returns the next inline chart if exists.

## Syntax

expression.GetNextChart();

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiChart](../ApiChart.md) &#124; null (returns null if chart is last)

## Example

This example show how to get the next chart.

```javascript
builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oParagraph = oDocument.GetElement(0);
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oParagraph.AddDrawing(oChart);
var oCopyChart = oChart.Copy();
oParagraph.AddDrawing(oCopyChart);
var oNextChart = oChart.GetNextChart();
var oStroke = Api.CreateStroke(1 * 150, Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61)));
oNextChart.SetMinorHorizontalGridlines(oStroke);
builder.SaveFile("docx", "GetNextChart.docx");
builder.CloseFile();
```