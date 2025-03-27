# SetSeriaValues

Sets values from the specified range to the specified series.

## Syntax

```javascript
expression.SetSeriaValues(sRange, nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | A range of cells from the sheet with series values. For example:\ "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,\ "A1:A5" - must be a single cell, row or column,\ "Example series". |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example sets values from the specified range to the specified series.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(260);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(270);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
worksheet.GetRange("D4").SetValue(300);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetSeriaValues("'Sheet1'!$B$4:$D$4", 1);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetShowPointDataLabel(1, 1, false, false, true, false);
chart.SetShowPointDataLabel(1, 2, false, false, true, false);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
