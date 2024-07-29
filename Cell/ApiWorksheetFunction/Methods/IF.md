# IF

Checks whether a condition is met, and returns one value if TRUE, and another value if FALSE.

## Syntax

expression.IF(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | boolean |  | Is any value or expression that can be evaluated to TRUE or FALSE. |
| arg2 | Required | any |  | Is the value that is returned if Logical_test is TRUE. If omitted, TRUE is returned. You can nest up to seven IF functions. |
| arg3 | Required | any |  | Is the value that is returned if Logical_test is FALSE. If omitted, FALSE is returned. |

## Returns

number, string, boolean