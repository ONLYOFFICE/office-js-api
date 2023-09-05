# GetIndex

Returns a sheet index.

## Syntax

expression.GetIndex();

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Number

## Example

This example shows how to get a sheet index.

```javascript
builder.CreateFile("xlsx");
var oWorksheet = Api.GetActiveSheet();
var nIndex = oWorksheet.GetIndex();
oWorksheet.GetRange("A1").SetValue("Index: ");
oWorksheet.GetRange("B1").SetValue(nIndex);
builder.SaveFile("xlsx", "GetIndex.xlsx");
builder.CloseFile();
```