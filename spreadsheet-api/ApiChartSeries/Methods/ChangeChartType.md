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
let series = chart.GetSeries(0);
let seriesType = series.GetChartType();
worksheet.GetRange("F1").SetValue("Old Series Type = " + seriesType);
series.ChangeChartType("area");
seriesType = series.GetChartType();
worksheet.GetRange("F2").SetValue("New Series Type = " + seriesType);
```
