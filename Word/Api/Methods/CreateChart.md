# CreateChart

Creates a chart with the parameters specified.

## Syntax

expression.CreateChart(sType, aSeries, aSeriesNames, aCatNames, nWidth, nHeight, nStyleIndex, aNumFormats);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Optional | ChartType | "bar" | The chart type used for the chart display. |
| aSeries | Required | Array |  | The array of the data used to build the chart from. |
| aSeriesNames | Required | Array |  | The array of the names (the source table column names) used for the data which the chart will be build from. |
| aCatNames | Required | Array |  | The array of the names (the source table row names) used for the data which the chart will be build from. |
| nWidth | Required | EMU |  | The chart width in English measure units. |
| nHeight | Required | EMU |  | The chart height in English measure units. |
| nStyleIndex | Required | number |  | The chart color style index (can be 1 - 48, as described in OOXML specification). |
| aNumFormats | Required | Array.<NumFormat> &#124;Array.<String> |  | Numeric formats which will be applied to the series (can be custom formats).The default numeric format is "General". |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)