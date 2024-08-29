# AMORLINC

Returns the prorated linear depreciation of an asset for each accounting period..

## Syntax

expression.AMORLINC(arg1, arg2, arg3, arg4, arg5, arg6, arg7);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is the cost of the asset. |
| arg2 | Required | any |  | Is the date the asset is purchased. |
| arg3 | Required | any |  | Is the date of the end of the first period. |
| arg4 | Required | any |  | Is the salvage value at the end of life of the asset.. |
| arg5 | Required | any |  | Is the period. |
| arg6 | Required | any |  | Is the rate of depreciation. |
| arg7 | Required | any |  | Year_basis : 0 for year of 360 days, 1 for actual, 3 for year of 365 days.. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AMORLINC(3500, "1/1/2018", "3/1/2018", 500, 1, 0.25, 1));
```
