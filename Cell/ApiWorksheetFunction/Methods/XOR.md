# XOR

Returns a logical 'Exclusive Or' of all arguments.

## Syntax

expression.XOR();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.TRUE(); //returns TRUE, doesnt require arguments

oWorksheet.GetRange("A1").SetValue(ans);

```
