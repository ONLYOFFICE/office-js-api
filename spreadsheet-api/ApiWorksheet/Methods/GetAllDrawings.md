# GetAllDrawings

Returns all drawings from the current sheet.

## Syntax

```javascript
expression.GetAllDrawings();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Drawing](../../Enumeration/Drawing.md)[]

## Example

This example shows how to get all drawings from the sheet.

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
let drawing = worksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
drawing.SetTitle("Financial Overview", 13);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
drawing.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
drawing.SetSeriesFill(fill, 1, false);
let drawings = worksheet.GetAllDrawings();
drawings[0].SetSize(150 * 36000, 100 * 36000);
```
