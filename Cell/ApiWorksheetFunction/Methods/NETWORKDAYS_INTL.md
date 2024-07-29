# NETWORKDAYS_INTL

Returns the number of whole workdays between two dates with custom weekend parameters.

## Syntax

expression.NETWORKDAYS_INTL(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a serial date number that represents the start date. |
| arg2 | Required | any |  | Is a serial date number that represents the end date. |
| arg3 | Required | number |  | Is a number or string specifying when weekends occur. |
| arg4 | Required | any |  | Is an optional set of one or more serial date numbers to exclude from the working calendar, such as state and federal holidays and floating holidays. |

## Returns

number, string, boolean