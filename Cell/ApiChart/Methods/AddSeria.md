# AddSeria

Adds a new series to the current chart.

## Syntax

expression.AddSeria(sNameRange, sValuesRange, sXValuesRange?);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sNameRange | Required | String | The series name. Can be a range of cells or usual text. For example: 1) "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column, 2) "A1:A5" - must be a single cell, row or column, 3) "Example series". |
| sValuesRange | Required | String | A range of cells from the sheet with series values. For example: 1) "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column, 2) "A1:A5" - must be a single cell, row or column. |
| sXValuesRange | Optional | String | A range of cells from the sheet with series x-axis values. It is used with the scatter charts only. For example: 1) "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column, 2) "A1:A5" - must be a single cell, row or column. Default value is "undefined". |

## Returns

This method doesn't return any data.

## Example

This example adds a new series to the chart.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("B1").SetValue(2014);
oWorksheet.GetRange("C1").SetValue(2015);
oWorksheet.GetRange("D1").SetValue(2016);
oWorksheet.GetRange("A2").SetValue("Projected Revenue");
oWorksheet.GetRange("A3").SetValue("Estimated Costs");
oWorksheet.GetRange("A4").SetValue("Cost price");
oWorksheet.GetRange("B2").SetValue(200);
oWorksheet.GetRange("B3").SetValue(250);
oWorksheet.GetRange("B4").SetValue(50);
oWorksheet.GetRange("C2").SetValue(240);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(120);
oWorksheet.GetRange("D2").SetValue(280);
oWorksheet.GetRange("D3").SetValue(280);
oWorksheet.GetRange("D4").SetValue(160);
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.AddSeria("Cost price", "'Sheet1'!$B$4:$D$4");
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
builder.SaveFile("xlsx", "AddSeria.xlsx");
builder.CloseFile();
```