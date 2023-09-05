# SetSize

Sets the size of the object (image, shape, chart) bounding box.

## Syntax

expression.SetSize(nWidth, nHeight);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../../Enumerations/Emu.md) | The object width measured in English measure units. |
| nHeight | Required | [EMU](../../../Enumerations/Emu.md) | The object height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the size of the shape bounding box.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 2, 3 * 36000);
builder.SaveFile("xlsx", "SetSize.xlsx");
builder.CloseFile();
```