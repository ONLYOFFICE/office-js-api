# CHITEST

Returns the test for independence: the value from the chi-squared distribution for the statistic and the appropriate degrees of freedom.

## Syntax

expression.CHITEST(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | The range of data that contains observations to test against expected values. |
| arg2 | Required | any |  | The range of data that contains the ratio of the product of row totals and column totals to the grand total. |

## Returns

number