# SKEW_P

Returns the skewness of a distribution based on a population: a characterization of the degree of asymmetry of a distribution around its mean.

## Syntax

expression.SKEW_P(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; Array.&lt;number&gt; &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the skewness of a distribution will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();

var valueArr = [1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12];

// Place the numbers in cells
for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.SKEW_P(1, 0, 0, 0, 0, 1, 0, 0, 2, 3, 4, 5, 6, 8, 10, 12);

oWorksheet.GetRange("C1").SetValue(ans);

```
