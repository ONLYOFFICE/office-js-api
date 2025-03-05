# AddChart

Creates a chart of the specified type from the selected data range of the current sheet.💡 Please note that the horizontal and vertical offsets are calculated within the limits of the specified column androw cells only. If this value exceeds the cell width or height, another vertical/horizontal position will be set.

## Syntax

```javascript
expression.AddChart(sDataRange, bInRows, sType, nStyleIndex, nExtX, nExtY, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDataRange | Required | string |  | The selected cell range which will be used to get the data for the chart, formed specifically and including the sheet name. |
| bInRows | Required | boolean |  | Specifies whether to take the data from the rows or from the columns. If true, the data from the rows will be used. |
| sType | Required | [ChartType](../../Enumeration/ChartType.md) |  | The chart type used for the chart display. |
| nStyleIndex | Required | number |  | The chart color style index (can be **1 - 48**, as described in OOXML specification). |
| nExtX | Required | [EMU](../../Enumeration/EMU.md) |  | The chart width in English measure units |
| nExtY | Required | [EMU](../../Enumeration/EMU.md) |  | The chart height in English measure units. |
| nFromCol | Required | number |  | The number of the column where the beginning of the chart will be placed. |
| nColOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromCol column to the left part of the chart measured in English measure units. |
| nFromRow | Required | number |  | The number of the row where the beginning of the chart will be placed. |
| nRowOffset | Required | [EMU](../../Enumeration/EMU.md) |  | The offset from the nFromRow row to the upper part of the chart measured in English measure units. |

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

This example creates a chart of the specified type from the selected data range of the sheet.

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
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
