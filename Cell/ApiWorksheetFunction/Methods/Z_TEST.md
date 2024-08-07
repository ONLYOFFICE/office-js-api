# Z_TEST

Returns the one-tailed P-value of a z-test.

## Syntax

expression.Z_TEST(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | Array.<number> &#124;[ApiRange](../../ApiRange/ApiRange.md) |  | The array or range of data against which to test X. |
| arg2 | Required | number |  | The value to test. |
| arg3 | Required | number |  | The population (known) standard deviation. If omitted, the sample standard deviation is used. |

## Returns

number