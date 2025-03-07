# EXPONDIST

Returns the exponential distribution.

## Syntax

```javascript
expression.EXPONDIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value of the x function, a nonnegative number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The lambda parameter value, a positive number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value that determines the function form. If this parameter is -**true**,\ the function will return the cumulative distribution function, if it is -**false**, it will return the probability density function. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_DIST(10, 6, 4, false);
worksheet.GetRange("B2").SetValue(ans);
```
