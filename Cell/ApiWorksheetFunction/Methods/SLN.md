# SLN

Returns the straight-line depreciation of an asset for one period.

## Syntax

expression.SLN(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the initial cost of the asset. |
| arg2 | Required | number |  | Is the salvage value at the end of the life of the asset. |
| arg3 | Required | number |  | Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |

## Returns

number, string, boolean