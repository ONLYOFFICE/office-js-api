# GetSheets

Returns a sheet collection that represents all the sheets in the active workbook.

## Syntax

expression.GetSheets();

`expression` - A variable that represents a [Api](../Api.md) class.

## Parametrs

This method doesn't have any parameters.

## Returns

Array<[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)>

## Example

This example shows how to get a sheet collection that represents all the sheets in the active workbook.

```javascript
builder.CreateFile("xlsx");
Api.AddSheet("new_sheet_name");
var sheets = Api.GetSheets();
var sheet_name1 = sheets[0].GetName();
var sheet_name2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheet_name1);
sheets[1].GetRange("A2").SetValue(sheet_name2);
builder.SaveFile("xlsx", "GetSheets.xlsx");
builder.CloseFile();
```