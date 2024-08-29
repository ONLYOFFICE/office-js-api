# CUMPRINC

Returns the cumulative principal paid on a loan between two periods.

## Syntax

expression.CUMPRINC(arg1, arg2, arg3, arg4, arg5, arg6);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the interest rate. |
| arg2 | Required | any |  | Is the total number of payment periods. |
| arg3 | Required | any |  | Is the present value. |
| arg4 | Required | any |  | Is the first period in the calculation. |
| arg5 | Required | any |  | Is the last period in the calculation. |
| arg6 | Required | any |  | Is the timing of the payment. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CUMPRINC(0.1/12, 2*12, 2000, 1, 24, 0));
```
