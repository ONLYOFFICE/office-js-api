# IRR

Returns the internal rate of return for a series of cash flows.

## Syntax

expression.IRR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is an array or a reference to cells that contain numbers for which you want to calculate the internal rate of return. |
| arg2 | Required | number |  | Is a number that you guess is close to the result of IRR; 0.1 (10 percent) if omitted. |

## Returns

number, string, boolean