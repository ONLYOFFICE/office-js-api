# GetCount

Returns the cells count in the currrent range.

## Syntax

expression.GetCount();

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get the cells count in the range.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
var nCount = oWorksheet.GetRange("A1:C1").GetCount();
oWorksheet.GetRange("A4").SetValue("Count: ");
oWorksheet.GetRange("B4").SetValue(nCount);
builder.SaveFile("xlsx", "GetCount.xlsx");
builder.CloseFile();
```