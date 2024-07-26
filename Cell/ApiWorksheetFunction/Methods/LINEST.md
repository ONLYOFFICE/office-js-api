# LINEST

Returns statistics that describe a linear trend matching known data points, by fitting a straight line using the least squares method.

## Syntax

expression.LINEST(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The set of y-values from the <em>y = mx + b</em> equation. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | An optional set of x-values from the <em>y = mx + b</em> equation. |
| arg3 | Required | boolean |  | A logical value: the constant <em>b</em> is calculated normally if this parameter is set to **true** or omitted,and <em>b</em> is set equal to 0 if the parameter is **false**. |
| arg4 | Required | boolean |  | A logical value: return additional regression statistics if this parameter is set to **true**,and return m-coefficients and the constant <em>b</em> if the parameter is **false** or omitted. |

## Returns

number