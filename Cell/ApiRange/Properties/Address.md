# Address

Returns the range address. **Read-only**

## Syntax

expression.Address;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

String

## Example

This example shows how to get the range address.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
var sAddress = oWorksheet.GetRange("A1").Address;
oWorksheet.GetRange("A3").SetValue("Address: ");
oWorksheet.GetRange("B3").SetValue(sAddress);
builder.SaveFile("xlsx", "Address.xlsx");
builder.CloseFile();
```