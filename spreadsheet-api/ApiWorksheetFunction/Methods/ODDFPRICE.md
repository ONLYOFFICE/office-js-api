# ODDFPRICE

Returns the price per $100 face value of a security with an odd first period.

## Syntax

```javascript
expression.ODDFPRICE(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The security settlement date, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the security, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The issue date of the security, expressed as a serial date number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first coupon date of the security, expressed as a serial date number. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate of the security. |
| arg6 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The annual yield of the security. |
| arg7 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The redemption value of the security, per $100 face value. |
| arg8 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of interest payments per year. The possible values are: 1 for annual payments, 2 for semiannual payments, 4 for quarterly payments. |
| arg9 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The day count basis to use: -**0** or omitted - US (NASD) 30/360; -**1** - Actual/actual; -**2** - Actual/360; -**3** - Actual/365; -**4** - European 30/360. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ODDFPRICE("1/1/2017", "6/1/2019", "12/1/2016", "3/15/2017", 0.05, 0.09, 100, 2));
```
