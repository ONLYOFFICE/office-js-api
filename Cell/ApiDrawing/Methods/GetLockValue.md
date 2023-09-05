# GetLockValue

Returns the lock value for the specified lock type of the current drawing.

## Syntax

expression.GetLockValue(sType);

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../../Enumerations/DrawingLockType.md) | Lock type in the string format. |

## Returns

Boolean

## Example

This example shows how to get the lock value for the specified lock type of the drawing.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
var oStroke = Api.CreateStroke(0, Api.CreateNoFill());
var oDrawing = oWorksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDrawing.SetSize(120 * 36000, 70 * 36000);
oDrawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
oDrawing.SetLockValue("noSelect", true);
var bLockValue = oDrawing.GetLockValue("noSelect");
oWorksheet.GetRange("A1").SetValue("This drawing cannot be selected: " + bLockValue);
builder.SaveFile("xlsx", "GetLockValue.xlsx");
builder.CloseFile();
```