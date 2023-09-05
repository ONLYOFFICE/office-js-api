# AddChart

Creates a chart of the specified type from the selected data range of the current sheet.
<br>Please note that the horizontal and vertical offsets are calculated within the limits of the specified column and row cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

expression.AddChart(sDataRange, bInRows, sType, nStyleIndex, nExtX, nExtY, nFromCol, nColOffset, nFromRow, nRowOffset);

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sDataRange | Required | String | The selected cell range which will be used to get the data for the chart, formed specifically and including the sheet name. |
| bInRows | Required | Boolean | Specifies whether to take the data from the rows or from the columns. If true, the data from the rows will be used. |
| sType | Required | [ChartType](../../../Enumerations/ChartType.md) | The chart type used for the chart display. |
| nStyleIndex | Required | Number | The chart color style index (can be 1 - 48, as described in OOXML specification). |
| nExtX | Required | [EMU](../../../Enumerations/Emu.md) | The chart width in English measure units |
| nExtY | Required | [EMU](../../../Enumerations/Emu.md) | The chart height in English measure units. |
| nFromCol | Required | Number | The number of the column where the beginning of the chart will be placed. |
| nColOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromCol column to the left part of the chart measured in English measure units. |
| nFromRow | Required | Number | The number of the row where the beginning of the chart will be placed. |
| nRowOffset | Required | [EMU](../../../Enumerations/Emu.md) | The offset from the nFromRow row to the upper part of the chart measured in English measure units. |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

This example creates a chart of the specified type from the selected data range of the sheet.

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
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oChart.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oChart.SetSeriesFill(oFill, 1, false);
builder.SaveFile("xlsx", "AddChart.xlsx");
builder.CloseFile();
```