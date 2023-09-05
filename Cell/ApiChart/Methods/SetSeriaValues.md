# SetSeriaValues

Sets values from the specified range to the specified series.

## Syntax

expression.SetSeriaValues(sRange, nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sNameRange | Required | String | The series name. Can be a range of cells or usual text. For example: 1) "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column, 2) "A1:A5" - must be a single cell, row or column, 3) "Example series". |
| nSeria | Required | Number | The index of the chart series. |

## Returns

Boolean

## Example

This example sets values from the specified range to the specified series.

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
oWorksheet.GetRange("B4").SetValue(260);
oWorksheet.GetRange("C2").SetValue(240);
oWorksheet.GetRange("C3").SetValue(260);
oWorksheet.GetRange("C4").SetValue(270);
oWorksheet.GetRange("D2").SetValue(280);
oWorksheet.GetRange("D3").SetValue(280);
oWorksheet.GetRange("D4").SetValue(300);
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.SetSeriaValues("'Sheet1'!$B$4:$D$4", 1);
oChart.SetShowPointDataLabel(1, 0, false, false, true, false);
oChart.SetShowPointDataLabel(1, 1, false, false, true, false);
oChart.SetShowPointDataLabel(1, 2, false, false, true, false);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
builder.SaveFile("xlsx", "SetSeriaValues.xlsx");
builder.CloseFile();
```