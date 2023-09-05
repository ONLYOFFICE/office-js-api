# GetOrientation

Returns the current range angle.

## Syntax

expression.GetOrientation();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[Angle](../../../Enumerations/Angle.md)

## Example

This example shows how to get the range angle.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var oRange = oWorksheet.GetRange("A1:B1");
oRange.SetOrientation("xlUpward");
var sOrientation = oRange.GetOrientation();
oWorksheet.GetRange("A3").SetValue("Orientation: " + sOrientation);
builder.SaveFile("xlsx", "GetOrientation.xlsx");
builder.CloseFile();
```