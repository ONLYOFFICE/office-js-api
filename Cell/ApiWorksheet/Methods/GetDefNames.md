# GetDefNames

Returns an array of ApiName objects.

## Syntax

expression.GetDefNames();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiName](../../ApiName/ApiName.md)>

## Example

This example shows how to get an array of ApiName objects.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("A2").SetValue("A");
oWorksheet.GetRange("B2").SetValue("B");
oWorksheet.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oWorksheet.AddDefName("letters", "Sheet1!$A$2:$B$2");
var aDefNames = oWorksheet.GetDefNames();
oWorksheet.GetRange("A4").SetValue("DefNames: " + aDefNames[0].GetName() + ", " + aDefNames[1].GetName());
builder.SaveFile("xlsx", "GetDefNames.xlsx");
builder.CloseFile();
```