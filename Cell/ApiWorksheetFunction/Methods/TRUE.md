# TRUE

Returns the logical value TRUE.

## Syntax

expression.TRUE();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var logical1 = 1 > 0;
var logical2 = 2 > 0;

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.XOR(logical1, logical2); //Works on XOR gate logic

oWorksheet.GetRange("C1").SetValue(ans);

```
