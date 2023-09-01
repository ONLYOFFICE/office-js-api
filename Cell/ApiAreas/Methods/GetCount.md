# GetCount

Returns a value that represents the number of objects in the collection.

## Syntax

expression.GetCount();

`expression` - A variable that represents a [ApiAreas](../ApiAreas.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a value that represents the number of objects in the collection.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B1:D1");
oRange.SetValue("1");
oRange.Select();
var oAreas = oRange.GetAreas();
var nCount = oAreas.GetCount();
oRange = oWorksheet.GetRange('A5');
oRange.SetValue("The number of ranges in the areas: ");
oRange.AutoFit(false, true);
oWorksheet.GetRange('B5').SetValue(nCount);
builder.SaveFile("xlsx", "GetCount.xlsx");
builder.CloseFile();
```