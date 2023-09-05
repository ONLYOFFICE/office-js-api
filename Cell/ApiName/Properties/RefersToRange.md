# RefersToRange

Returns the ApiRange object by reference. **Read-only**

## Syntax

expression.RefersToRange;

`expression` - A variable that represents a [ApiName](../ApiName.md) class.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to get a formula that the name is defined to refer to.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
var oDefName = Api.GetDefName("numbers");
var oRange = oDefName.RefersToRange;
oRange.SetBold(true);
builder.SaveFile("xlsx", "RefersToRange.xlsx");
builder.CloseFile();
```