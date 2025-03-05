# GetClassType

Returns a type of the ApiChartSeries class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiChartSeries](../ApiChartSeries.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"chartSeries"

## Example

This example gets a type of ApiChartSeries class and inserts it into the presentation.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
var aAllSeries = oChart.GetAllSeries();
var oSeries, sClassType, sTitle = "";
oSeries = oChart.GetSeries(0);
sClassType = oSeries.GetClassType();
sTitle += "Class Type = " + sClassType + "\n";
oChart.SetTitle(sTitle, 20);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oSlide.AddObject(oChart);
```
