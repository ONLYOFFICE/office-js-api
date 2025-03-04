# CONFIDENCE

Returns the confidence interval for a population mean, using a normal distribution.

## Syntax

```javascript
expression.CONFIDENCE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The significance level used to compute the confidence level, a number greater than 0 and less than 1. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The population standard deviation for the data range and is assumed to be known. This value must be greater than 0. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The sample size. |

## Returns

number

## Example

This example shows how to return the confidence interval for a population mean, using a normal distribution.

```javascript editor-xlsx
// How to return the confidence interval for a population mean, using a normal distribution.

// Use function to get the confidence interval for a population mean, using a normal distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.CONFIDENCE(0.5, 57, 8);
oWorksheet.GetRange("B2").SetValue(ans);
```
