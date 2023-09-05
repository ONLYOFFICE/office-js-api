# Areas

Returns a collection of the areas. **Read-only**

## Syntax

expression.Areas;

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Returns

[ApiAreas](../../ApiAreas/ApiAreas.md)

## Example

This example shows how to get a collection of the ranges.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.Areas;
var nCount = oAreas.GetCount();
oRange = oWorksheet.GetRange("A5");
oRange.SetValue("The number of ranges in the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange("B5").SetValue(nCount);
builder.SaveFile("xlsx", "Areas.xlsx");
builder.CloseFile();
```