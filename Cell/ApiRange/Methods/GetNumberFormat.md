# GetNumberFormat

Returns a value that represents the format code for the current range.

## Syntax

```javascript
expression.GetNumberFormat();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get a value that represents the format code for the current range.

```javascript editor-xlsx
// How to find out a number format of a range.

// Get a range, get its cell number format and show it in the worksheet.

var oWorksheet = Api.GetActiveSheet();
var oRange = oWorksheet.GetRange("B2");
oRange.SetValue(3);
var sFormat = oRange.GetNumberFormat();
oWorksheet.GetRange("B3").SetValue("Number format: " + sFormat);
```
