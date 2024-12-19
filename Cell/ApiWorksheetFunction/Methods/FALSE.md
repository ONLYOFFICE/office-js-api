# FALSE

Returns the **false** logical value.

## Syntax

expression.FALSE();

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.FALSE(); //returns false, doesnt require arguments
oWorksheet.GetRange("C1").SetValue(ans);

```
