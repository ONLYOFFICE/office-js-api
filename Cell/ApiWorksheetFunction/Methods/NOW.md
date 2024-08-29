# NOW

Returns the current date and time formatted as a date and time..

## Syntax

expression.NOW();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NOW(); 

oWorksheet.GetRange("C1").SetValue(ans);

```
