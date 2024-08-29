# DB

Returns the depreciation of an asset for a specified period using the fixed-declining balance method.

## Syntax

expression.DB(arg1, arg2, arg3, arg4, arg5);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the initial cost of the asset. |
| arg2 | Required | number |  | Is the salvage value at the end of the life of the asset. |
| arg3 | Required | number |  | Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | number |  | Is the period for which you want to calculate the depreciation. Period must use the same units as Life. |
| arg5 | Required | number |  | Is the number of months in the first year. If month is omitted, it is assumed to be 12. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DB(3500, 500, 5, 1, 10));
```
