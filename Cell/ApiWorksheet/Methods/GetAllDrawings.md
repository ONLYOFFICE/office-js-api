# GetAllDrawings

Returns all drawings from the current sheet.

## Syntax

expression.GetAllDrawings();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiDrawing](../../ApiDrawing/ApiDrawing.md)>


## Example

This example shows how to get all drawings from the sheet.

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
var oDrawing = oWorksheet.AddChart("'Sheet1'!$A$1:$D$3", true, "bar3D", 2, 100 * 36000, 70 * 36000, 0, 2 * 36000, 7, 3 * 36000);
oDrawing.SetTitle("Financial Overview", 13);
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
oDrawing.SetSeriesFill(oFill, 0, false);
oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
oDrawing.SetSeriesFill(oFill, 1, false);
var aDrawings = oWorksheet.GetAllDrawings();
aDrawings[0].SetSize(150 * 36000, 100 * 36000);
builder.SaveFile("xlsx", "GetAllDrawings.xlsx");
builder.CloseFile();
```