# Worksheet

Returns the ApiWorksheet object that represents the worksheet containing the specified range. **Read-only**

## Syntax

expression.Worksheet;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)

## Example

This example shows how to get the Worksheet object that represents the worksheet containing the specified range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("A1:C1");
oRange.SetValue("1");
var oSheet = oRange.Worksheet;
oWorksheet.GetRange("A3").SetValue("Worksheet name: " + oSheet.GetName());
builder.SaveFile("xlsx", "Worksheet.xlsx");
builder.CloseFile();
```