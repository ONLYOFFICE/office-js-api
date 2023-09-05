# RemoveSeria

Removes the specified series from the current chart.

## Syntax

expression.RemoveSeria(nSeria);

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nSeria | Required | Number | The index of the chart series. |

## Returns

Boolean

## Example

This example shows how to remove the specified series from the current chart.

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
var oChart = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
oChart.SetTitle("Financial Overview", 13);
oChart.RemoveSeria(1);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 0, false);
oWorksheet.GetRange("A5").SetValue("The Estimated Costs series was removed from the current chart.");
builder.SaveFile("xlsx", "RemoveSeria.xlsx");
builder.CloseFile();
```