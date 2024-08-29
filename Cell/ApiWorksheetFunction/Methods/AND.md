# AND

Checks whether all arguments are TRUE, and returns TRUE if all arguments are TRUE.

## Syntax

expression.AND();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.AND(12 < 100, 34 < 100, 50 < 100); //AND logical function

oWorksheet.GetRange("C1").SetValue(ans);

```
