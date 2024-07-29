# T_DIST

Returns the left-tailed Student's t-distribution.

## Syntax

expression.T_DIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |
| arg3 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form.If it is **true**, the function returns the cumulative distribution function.If it is **false**, the function returns the probability density function. |

## Returns

number