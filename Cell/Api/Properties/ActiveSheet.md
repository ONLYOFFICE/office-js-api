# ActiveSheet

Returns an object that represents the active sheet. **Read-only**

## Syntax

expression.ActiveSheet;

`expression` - A variable that represents a [Api](../Api.md) class.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

This example shows how to get an object that represents the active sheet.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.ActiveSheet;
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("B2").SetValue("2");
oWorksheet.GetRange("A3").SetValue("2x2=");
oWorksheet.GetRange("B3").SetValue("=B1*B2");
builder.SaveFile("xlsx", "ActiveSheet.xlsx");
builder.CloseFile();
```