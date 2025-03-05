# RATE

Returns the interest rate per period for a loan or an investment. For example, use 6%/4 for quarterly payments at 6% APR.

## Syntax

```javascript
expression.RATE(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The total number of payment periods for the loan or investment. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The payment made each period and cannot change over the life of the loan or investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value: the total amount that a series of future payments is worth now. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The future value, or a cash balance which will be attained after the last payment is made. If omitted, it is equal to 0. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A logical value: payment at the beginning of the period = 1; payment at the end of the period = 0 or omitted. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An estimate at what the rate will be. If it is omitted, the function will assume guess to be 0.1 (10 percent). |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RATE(2*12, -500, 10000, 0));
```
