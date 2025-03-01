# GetBottomMargin

Returns the bottom margin of the sheet.

## Syntax

```javascript
expression.GetBottomMargin();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

This example shows how to get the bottom margin of the sheet.

```javascript editor-xlsx
// How to get margin of the bottom.

// Get the size of the bottom margin of the sheet.

var oWorksheet = Api.GetActiveSheet();
var nBottomMargin = oWorksheet.GetBottomMargin();
oWorksheet.GetRange("A1").SetValue("Bottom margin: " + nBottomMargin + " mm");
```
