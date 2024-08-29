# OR

Checks whether any of the arguments are TRUE, and returns TRUE or FALSE. Returns FALSE only if all arguments are FALSE.

## Syntax

expression.OR();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(12);

var logical1 = oWorksheet.GetRange("A1") < 10;
var logical2 = 34 < 10;
var logical3 = 50 < 10;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.OR(logical1, logical2, logical3);
oWorksheet.GetRange("C1").SetValue(ans);

```
