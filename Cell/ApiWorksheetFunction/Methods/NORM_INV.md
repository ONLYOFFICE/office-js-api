# NORM_INV

Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORM_INV(arg1, arg2, arg3);
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

// Use a function to get the inverse of the normal cumulative distribution with a mean and standard deviation.

const oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange("A1").SetValue(0.6);

//method params
var value = oWorksheet.GetRange("A1").GetValue();

var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.NORMSDIST(value);

oWorksheet.GetRange("C1").SetValue(ans);

```
