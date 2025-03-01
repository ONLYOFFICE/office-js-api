# NORMINV

Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORMINV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of the distribution, a positive number. |

## Returns

number

## Example

This example shows how to return the inverse of the normal cumulative distribution for the specified mean and standard deviation.

```javascript editor-xlsx
// How to calculate the inverse of the normal cumulative distribution.

// Use a function to get the inverse of the normal cumulative distribution.

const oWorksheet = Api.GetActiveSheet();
var valueArr = [0.34, 7, 3];

// Place the numbers in cells

for (var i = 0; i < valueArr.length; i++) {
  oWorksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
var probability = oWorksheet.GetRange("A1").GetValue();
var mean = oWorksheet.GetRange("A2").GetValue();
var standardDeviation = oWorksheet.GetRange("A3").GetValue();
var oFunction = Api.GetWorksheetFunction();
var inv = oFunction.NORMINV(probability, mean, standardDeviation);
oWorksheet.GetRange("C1").SetValue(inv);

```
