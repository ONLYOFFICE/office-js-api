# HYPGEOM_DIST

Returns the hypergeometric distribution.

## Syntax

expression.HYPGEOM_DIST(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The number of successes in the sample. |
| arg2 | Required | number |  | The size of the sample. |
| arg3 | Required | number |  | The number of successes in the population. |
| arg4 | Required | number |  | The population size. |
| arg5 | Required | boolean |  | A logical value (**true** or **false**) that determines the function form.If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability mass function. |

## Returns

number