# GetSheets

Returns a sheet collection that represents all the sheets in the active workbook.

## Syntax

```javascript
expression.GetSheets();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)[]

## Example

This example shows how to get a sheet collection that represents all the sheets in the active workbook.

```javascript editor-xlsx
Api.AddSheet("new_sheet_name");
let sheets = Api.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);
```
