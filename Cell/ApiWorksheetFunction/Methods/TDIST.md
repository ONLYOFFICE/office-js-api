# TDIST

Returns the Student's t-distribution.

## Syntax

expression.TDIST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |
| arg3 | Required | number |  | Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2. |

## Returns

number