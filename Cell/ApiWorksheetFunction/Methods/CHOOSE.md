# CHOOSE

Chooses a value or action to perform from a list of values, based on an index number.

## Syntax

expression.CHOOSE();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CHOOSE(2, 3, 4, 89, 76, 0));
```
