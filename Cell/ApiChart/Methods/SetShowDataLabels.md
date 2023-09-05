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
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("C2").SetValue(240);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("D2").SetValue(280);
oWorksheet.GetRange("D3").SetValue(280);
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.SetShowDataLabels(false, false, true, false);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
builder.SaveFile("xlsx", "SetShowDataLabels.xlsx");
builder.CloseFile();
```