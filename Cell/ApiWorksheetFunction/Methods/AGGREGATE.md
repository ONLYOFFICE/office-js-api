# AGGREGATE

Returns an aggregate in a list or database.

## Syntax

expression.AGGREGATE();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AGGREGATE(9, 4, 10, 30, 50, 5));
```
