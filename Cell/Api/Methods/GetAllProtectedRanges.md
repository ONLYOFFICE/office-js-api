# GetAllProtectedRanges

Returns all protected ranges from the workbook.

## Syntax

expression.GetAllProtectedRanges();

`expression` - A variable that represents a [Api](../Api.md) class.


## Parametrs

This method doesn't have any parameters.


## Returns

Array<[ApiProtectedRange](../../ApiProtectedRange/ApiProtectedRange.md)>

## Example

This example shows how to get an object that represents all protected ranges.

```javascript
builder.CreateFile("xlsx");
Api.AddProtectedRange("protectedRange1", "Sheet1!$A$1:$B$1");
Api.AddProtectedRange("protectedRange2", "Sheet1!$A$2:$B$2");
var protectedRanges = Api.GetAllProtectedRanges("protectedRange");
protectedRanges[0].SetTitle("protectedRangeNew1");
protectedRanges[1].SetTitle("protectedRangeNew2");
builder.SaveFile("xlsx", "getProtectedRange.xlsx");
builder.CloseFile();
```