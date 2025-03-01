# GetWorksheetFunction

Returns the ApiWorksheetFunction object.

## Syntax

```javascript
expression.GetWorksheetFunction();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiWorksheetFunction](../../ApiWorksheetFunction/ApiWorksheetFunction.md)

## Example

This example shows how to use built-in functions using worksheet function objects.

```javascript editor-xlsx
// How to use system functions in a spreadsheets.

// Use built-in functions in a worksheet.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASC("text"));
```
