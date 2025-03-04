# GetLeftMargin

Returns the left margin of the sheet.

## Syntax

```javascript
expression.GetLeftMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the left margin of the sheet.

```javascript editor-xlsx
// How to get margin of the sheet's left side.

// Get the size of the left margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
var nLeftMargin = oWorksheet.GetLeftMargin();
oWorksheet.GetRange("A1").SetValue("Left margin: " + nLeftMargin + " mm");
```
