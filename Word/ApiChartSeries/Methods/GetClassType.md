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

This example gets a type of ApiChartSeries class and inserts it into the document.

```javascript
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("comboBarLine", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
let series = chart.GetSeries(0);
let classType = series.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("The ApiChartSeries class type: " + classType);
doc.Push(paragraph);
```
