# STDEVPA

Calculates standard deviation based on an entire population, including logical values and text. Text and the **false** logical value have the value 0; the **true** logical value has the value 1.

## Syntax

expression.STDEVPA(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; boolean &#124; Array.&lt;number&gt; &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 values for which the standard deviation will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number, string, boolean

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.STDEVPA(1, 0, 0, false, 5, 1, 0, 0, 2, true, 6, 7, 6, 8, 10, 12); //includes logical values

oWorksheet.GetRange("C1").SetValue(ans);

```
