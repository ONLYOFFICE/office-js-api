# EXPON_DIST

Returns the exponential distribution.

## Syntax

```javascript
expression.EXPON_DIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value of the x function, a nonnegative number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lambda parameter value, a positive number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value that determines the function form. If this parameter is **true**, the function will return the cumulative distribution function, if it is **false**, it will return the probability density function. |

## Returns

number

## Example

This example shows how to return the exponential distribution.

```javascript editor-xlsx
// How to get the exponential distribution.

// Use function to calculate an exponential distribution.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var ans = oFunction.EXPON_DIST(0.5, 3, false);
oWorksheet.GetRange("B2").SetValue(ans);
```
