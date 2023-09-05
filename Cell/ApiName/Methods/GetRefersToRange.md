# GetRefersToRange

Returns the ApiRange object by its name.

## Syntax

expression.GetRefersToRange();

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get the ApiRange object by its name.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
var oRange = oDefName.GetRefersToRange();
oRange.SetBold(true);
builder.SaveFile("xlsx", "GetRefersToRange.xlsx");
builder.CloseFile();
```