# SYD

Returns the sum-of-years' digits depreciation of an asset for a specified period.

## Syntax

expression.SYD(arg1, arg2, arg3, arg4);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the initial cost of the asset. |
| arg2 | Required | number |  | Is the salvage value at the end of the life of the asset. |
| arg3 | Required | number |  | Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | number |  | Is the period and must use the same units as Life. |

## Returns

number, string, boolean