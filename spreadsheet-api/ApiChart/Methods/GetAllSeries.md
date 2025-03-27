# GetAllSeries

Returns all series from the chart space.

## Syntax

```javascript
expression.GetAllSeries();
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiChartSeries](../../ApiChartSeries/ApiChartSeries.md)[]

## Example

This example gets all series of ApiChart class and inserts their types into the table.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "comboBarLine", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 5, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
let allSeries = chart.GetAllSeries();
let series, seriesType;
for(let seriesIndex = 0; seriesIndex < allSeries.length; ++seriesIndex) {
    series = allSeries[seriesIndex];
    seriesType = series.GetChartType();
    worksheet.GetRange("F" + (seriesIndex + 1)).SetValue((seriesIndex + 1) + " Series Type = " + seriesType);
}
```
