# VDB

Returns the depreciation of an asset for any period you specify, including partial periods, using the double-declining balance method or some other method you specify.

## Syntax

expression.VDB(arg1, arg2, arg3, arg4, arg5, arg6, arg7);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the initial cost of the asset. |
| arg2 | Required | number |  | Is the salvage value at the end of the life of the asset. |
| arg3 | Required | number |  | Is the number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | number |  | Is the starting period for which you want to calculate the depreciation, in the same units as Life. |
| arg5 | Required | number |  | Is the ending period for which you want to calculate the depreciation, in the same units as Life. |
| arg6 | Required | number |  | Is the rate at which the balance declines, 2 (double-declining balance) if omitted. |
| arg7 | Required | boolean |  | Switch to straight-line depreciation when depreciation is greater than the declining balance = FALSE or omitted; do not switch = TRUE. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.VDB(3500, 500, 5, 1, 3, 2, false));
```
