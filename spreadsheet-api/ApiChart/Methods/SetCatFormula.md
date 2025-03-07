# SetCatFormula

Sets a range with the category values to the current chart.

## Syntax

```javascript
expression.SetCatFormula(sRange);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRange | Required | string |  | A range of cells from the sheet with the category names. For example:\ "'sheet 1'!$A$2:$A$5" - must be a single cell, row or column,\ "A1:A5" - must be a single cell, row or column. |

## Returns

This method doesn't return any data.

## Example

This example sets a range with the category values to the current chart.

```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(2014);
worksheet.GetRange("C1").SetValue(2015);
worksheet.GetRange("D1").SetValue(2016);
worksheet.GetRange("A2").SetValue("Projected Revenue");
worksheet.GetRange("A3").SetValue("Estimated Costs");
worksheet.GetRange("B2").SetValue(200);
worksheet.GetRange("B3").SetValue(250);
worksheet.GetRange("B4").SetValue(2020);
worksheet.GetRange("C2").SetValue(240);
worksheet.GetRange("C3").SetValue(260);
worksheet.GetRange("C4").SetValue(2021);
worksheet.GetRange("D2").SetValue(280);
worksheet.GetRange("D3").SetValue(280);
worksheet.GetRange("D4").SetValue(2022);
let chart = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
chart.SetTitle("Financial Overview", 13);
chart.SetCatFormula("'Sheet1'!$B$4:$D$4");
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
```
