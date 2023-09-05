# GetName

Returns a sheet name.

## Syntax

expression.GetName();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

String

## Example

This example shows how to get a sheet name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var sName = oWorksheet.GetName();
oWorksheet.GetRange("A1").SetValue("Name: ");
oWorksheet.GetRange("B1").SetValue(sName);
builder.SaveFile("xlsx", "GetName.xlsx");
builder.CloseFile();
```