# ChangeChartType

Tries to change the series type. Returns true if successful.

## Syntax

```javascript
expression.ChangeChartType(sType);
```

`expression` - A variable that represents a [ApiChartSeries](../ApiChartSeries.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [ChartType](../../Enumeration/ChartType.md) |  | Chart type. |

## Returns

boolean

## Example

This example changes the type of the first series of ApiChart class and inserts the new type into the document.

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
let seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Old Series Type = " + seriesType);
doc.Push(paragraph);
series.ChangeChartType("area");
seriesType = series.GetChartType();
paragraph = Api.CreateParagraph();
paragraph.AddText("New Series Type = " + seriesType);
doc.Push(paragraph);
```
