# ACCRINT

Returns the accrued interest for a security that pays periodic interest.

## Syntax

```javascript
expression.ACCRINT(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The issue date of the security, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The date when the first interest is paid, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The security settlement date, expressed as a serial date number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The annual coupon rate of the security. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The par value of the security. |
| arg6 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of interest payments per year. The possible values are: 1 for annual payments, 2 for semiannual payments, 4 for quarterly payments. |
| arg7 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The day count basis to use: -**0** or omitted - US (NASD) 30/360; -**1** - Actual/actual; -**2** - Actual/360; -**3** - Actual/365; -**4** - European 30/360. |
| arg8 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A logical value: -**true** (1) or omitted returns the accrued interest from the issue date to the settlement date.\ -**false** (0) returns the accrued interest from the first interest date to the settlement date. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACCRINT("1/1/2018", "6/25/2018", "10/15/2018", "3.50%", 1000, 2));
```
