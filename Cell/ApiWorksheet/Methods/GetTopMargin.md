# GetTopMargin

Returns the top margin of the sheet.

## Syntax

```javascript
expression.GetTopMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the top margin of the sheet.

```javascript editor-xlsx
// How to get margin of the sheet's top side.

// Get the size of the top margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
var nTopMargin = oWorksheet.GetTopMargin();
oWorksheet.GetRange("A1").SetValue("Top margin: " + nTopMargin + " mm");
```
