# YEARFRAC

Returns the year fraction representing the number of whole days between the start date and end date.

## Syntax

```javascript
expression.YEARFRAC(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A serial date number that represents the start date. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | A serial date number that represents the end date. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The type of day count basis to use: **0** or omitted - US (NASD) 30/360; **1** - Actual/actual; **2** - Actual/360; **3** - Actual/365; **4** - European 30/360. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.YEARFRAC("12/7/1981", "11/5/2018");

oWorksheet.GetRange("C1").SetValue(ans);

```
