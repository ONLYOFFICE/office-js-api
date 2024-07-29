# SetShowPointDataLabel

Spicifies the show options for data labels.

## Syntax

expression.SetShowPointDataLabel(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeriesIndex | Required | number |  | The series index from the array of the data used to build the chart from. |
| nPointIndex | Required | number |  | The point index from this series. |
| bShowSerName | Required | boolean |  | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| bShowCatName | Required | boolean |  | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| bShowVal | Required | boolean |  | Whether to show or hide the chart data values. |
| bShowPercent | Required | boolean |  | Whether to show or hide the percent for the data values (works with stacked chart types).* @see office-js-api/Examples/Word/ApiChart/Methods/SetShowPointDataLabel.js |

## Returns

This method doesn't return any data.