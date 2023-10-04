# FreezePanes

Returns a freezePanes for a current worsheet.  **Read-only**

## Syntax

expression.FreezePanes;

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.


## Returns

[ApiFreezePanes](../../ApiFreezePanes/ApiFreezePanes.md)

## Example

This example freezes first column and get pastes a freezed range address into the table.

```javascript
builder.CreateFile("xlsx");
Api.FreezePanes('column');
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.FreezePanes.GetLocation();
oWorksheet.GetRange("A1").SetValue("Location: ");
oWorksheet.GetRange("B1").SetValue(oRange.GetAddress());
builder.SaveFile("xlsx", "FreezePanes.xlsx");
builder.CloseFile();
```