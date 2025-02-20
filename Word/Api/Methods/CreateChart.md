# CreateChart

Creates a chart with the parameters specified.

## Syntax

```javascript
expression.CreateChart(chartType, series, seriesNames, catNames, width, height, styleIndex, numFormats);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| chartType | Optional | [ChartType](../../Enumeration/ChartType.md) | "bar" | The chart type used for the chart display. |
| series | Required | Array |  | The array of the data used to build the chart from. |
| seriesNames | Required | Array |  | The array of the names (the source table column names) used for the data which the chart will be build from. |
| catNames | Required | Array |  | The array of the names (the source table row names) used for the data which the chart will be build from. |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The chart width in English measure units. |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The chart height in English measure units. |
| styleIndex | Required | number |  | The chart color style index (can be 1 - 48, as described in OOXML specification). |
| numFormats | Required | [NumFormat[]](../../Enumeration/NumFormat.md) \| String[] |  | Numeric formats which will be applied to the series (can be custom formats). The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

This example shows how to create a chart and paste it into the document.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let solidFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(solidFill, 0, false);
solidFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(solidFill, 1, false);
```
