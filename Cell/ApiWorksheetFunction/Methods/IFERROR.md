# IFERROR

Checks if there is an error in the formula in the first argument. The function returns the result of the formula if there is no error, or the value specified in the second argument if there is one.

## Syntax

expression.IFERROR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value, expression, or reference that is checked for an error. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number | string | boolean |  | The value to be returned if the formula evaluates to an error. The following errors are evaluated: **#N/A**, **#VALUE!**, **#REF!**, **#DIV/0!**, **#NUM!**, **#NAME?**, **#NULL!**. |

## Returns

number | string | boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var stock = ["Stock", 0, 84];
var values = ["Total value", "$5.43", "$297.36"];
oWorksheet.GetRange("C1").SetValue("Unit Price");

for (var i = 0; i < stock.length; i++) {
    oWorksheet.GetRange("A" + (i + 1)).SetValue(stock[i]);
}
for (var j = 0; j < values.length; j++) {
    oWorksheet.GetRange("B" + (j + 1)).SetValue(values[j]);
}
for (var n = 1; n < values.length; n++) {
    var value1 = oWorksheet.GetRange("B" + (n + 1)).GetValue();
    var value2 = oWorksheet.GetRange("A" + (n + 1)).GetValue();
    oWorksheet.GetRange("C" + (n + 1)).SetValue(oFunction.IFERROR(value1/value2, "Out of stock"));
}
```
