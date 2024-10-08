# STDEV

Estimates standard deviation based on a sample (ignores logical values and text in the sample).

## Syntax

expression.STDEV(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; Array.&lt;number&gt; &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the standard deviation will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr = [3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEV(3, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 0, 1, 13, 14);

oWorksheet.GetRange("C1").SetValue(ans);

```
