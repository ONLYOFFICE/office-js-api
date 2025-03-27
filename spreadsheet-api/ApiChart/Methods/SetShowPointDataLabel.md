# SetShowPointDataLabel

Spicifies the show options for data labels.

## Syntax

```javascript
expression.SetShowPointDataLabel(nSeriesIndex, nPointIndex, bShowSerName, bShowCatName, bShowVal, bShowPercent);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeriesIndex | Required | number |  | The series index from the array of the data used to build the chart from. |
| nPointIndex | Required | number |  | The point index from this series. |
| bShowSerName | Required | boolean |  | Whether to show or hide the source table column names used for the data which the chart will be build from. |
| bShowCatName | Required | boolean |  | Whether to show or hide the source table row names used for the data which the chart will be build from. |
| bShowVal | Required | boolean |  | Whether to show or hide the chart data values. |
| bShowPercent | Required | boolean |  | Whether to show or hide the percent for the data values (works with stacked chart types). |

## Returns

This method doesn't return any data.

## Example

This example spicifies the show options for the chart data labels.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
