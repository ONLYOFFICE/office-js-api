# SetShowDataLabels

Specifies which chart data labels are shown for the chart.

## Syntax

expression.SetShowDataLabels(bShowSerName, bShowCatName, bShowVal, bShowPercent);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShowSerName | Required | boolean |  | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| bShowCatName | Required | boolean |  | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| bShowVal | Required | boolean |  | Whether to show or hide the chart data values. |
| bShowPercent | Required | boolean |  | Whether to show or hide the percent for the data values (works with stacked chart types).* @see office-js-api/Examples/{Editor}/ApiChart/Methods/SetShowDataLabels.js |

## Returns

This method doesn't return any data.