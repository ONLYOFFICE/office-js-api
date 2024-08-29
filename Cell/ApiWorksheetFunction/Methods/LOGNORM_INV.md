# LOGNORM_INV

Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

expression.LOGNORM_INV(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | A probability associated with the lognormal distribution, a number between 0 and 1, inclusive. |
| arg2 | Required | number |  | The mean of ln(x). |
| arg3 | Required | number |  | The standard deviation of ln(x), a positive number. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.LOGNORM_INV(0.3, 2, 0.2));
```
