# GetVisible

Returns the state of sheet visibility.

## Syntax

```javascript
expression.GetVisible();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example shows how to get the state of sheet visibility.

```javascript editor-xlsx
// How to get visibility of the worksheet.

// Find out whether a sheet is visible or not and display it in the sheet.

var oWorksheet = Api.GetActiveSheet();
oWorksheet.SetVisible(true);
var bVisible = oWorksheet.GetVisible();
oWorksheet.GetRange("A1").SetValue("Visible: ");
oWorksheet.GetRange("B1").SetValue(bVisible);
```
