# T_DIST

Returns the left-tailed Student's t-distribution.

## Syntax

```javascript
expression.T_DIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability density function. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.T_DIST(1.5, 10, false);
worksheet.GetRange("B2").SetValue(ans);


```
