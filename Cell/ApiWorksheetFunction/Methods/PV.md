# PV

Returns the present value of an investment: the total amount that a series of future payments is worth now.

## Syntax

```javascript
expression.PV(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The interest rate per period. For example, use 6%/4 for quarterly payments at 6% APR. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The total number of payment periods in an investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The payment made each period and cannot change over the life of the investment. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The future value, or a cash balance which will be attained after the last payment is made. If omitted, it is equal to 0. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PV(0.1/12, 2*12, -500, 0));
```
