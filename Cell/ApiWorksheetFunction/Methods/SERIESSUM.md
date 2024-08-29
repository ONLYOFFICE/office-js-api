# SERIESSUM

Returns the sum of a power series based on the formula.

## Syntax

expression.SERIESSUM(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the input value to the power series. |
| arg2 | Required | any |  | Is the initial power to which you want to raise x. |
| arg3 | Required | any |  | Is the step by which to increase n for each term in the series. |
| arg4 | Required | any |  | Is a set of coefficients by which each successive power of x is multiplied. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SERIESSUM(5, 2, 1, 3));
```
