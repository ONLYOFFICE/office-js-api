# NA

Returns the error value #N/A (value not available).

## Syntax

expression.NA();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet(); 
var oFunction = Api.GetWorksheetFunction();
var result = oFunction.NA();
oWorksheet.GetRange("C3").SetValue(result);

```
