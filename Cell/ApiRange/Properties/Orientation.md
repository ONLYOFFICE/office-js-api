# Orientation

Sets an angle to the current cell range.

## Syntax

expression.Orientation; &#124; expression.Orientation = angle;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

| **Name** | **Required/Optional** | **Data type** | **Description** |
| ------------- | ------------- | ------------- | ------------- |
| angle | Required | [Angle](../../../Enumerations/Angle.md) | Specifies the range angle. |

## Returns

[Angle](../../../Enumerations/Angle.md)

## Example

This example sets an angle to the cell range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.Orientation = "xlUpward";
builder.SaveFile("xlsx", "Orientation.xlsx");
builder.CloseFile();
```