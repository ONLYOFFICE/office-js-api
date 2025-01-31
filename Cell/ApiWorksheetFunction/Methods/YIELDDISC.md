# YIELDDISC

Returns the annual yield for a discounted security. For example, a Treasury bill.

## Syntax

```javascript
expression.YIELDDISC(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The purchase price of the security, per $100 par value. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The redemption value of the security, per $100 par value. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The day count basis to use: **0** or omitted - US (NASD) 30/360; **1** - Actual/actual; **2** - Actual/360; **3** - Actual/365; **4** - European 30/360. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.YIELDDISC("1/10/2018", "11/20/2019", 90, 100));
```
