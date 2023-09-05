# SetShowDataLabels

Specifies which chart data labels are shown for the chart.

## Syntax

expression.SetShowDataLabels(bShowSerName, bShowCatName, bShowVal, bShowPercent);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| bShowSerName | Required | Boolean | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| bShowCatName | Required | Boolean | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| bShowVal | Required | Boolean | Whether to show or hide the chart data values. |
| bShowPercent | Required | Boolean | Whether to show or hide the percent for the data values (works with stacked chart types). |

## Returns

This method doesn't return any data.

## Example

This example specifies which chart data labels are shown for the chart.

```javascript
builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
oSlide.AddObject(oChart);
builder.SaveFile("pptx", "SetShowDataLabels.pptx");
builder.CloseFile();
```