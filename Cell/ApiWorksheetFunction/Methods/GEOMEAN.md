# GEOMEAN

Returns the geometric mean of an array or range of positive numeric data.

## Syntax

expression.GEOMEAN(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) &#124; Array.&lt;number&gt; |  | Up to 255 numeric values for which the geometric mean will be calculated. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.GEOMEAN(28, 16, 878, 800, 1650, 2000);
oWorksheet.GetRange("B2").SetValue(ans);


```
