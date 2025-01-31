# DDB

Returns the depreciation of an asset for a specified period using the double-declining balance method or some other method you specify.

## Syntax

```javascript
expression.DDB(arg1, arg2, arg3, arg4, arg5);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The initial cost of the asset. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The salvage value of the asset at the end of its lifetime. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The period for which the depreciation will be calculated. Period must use the same units as the useful life of the asset. |
| arg5 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The rate at which the balance declines. If this parameter is omitted, it is assumed to be 2 (the double-declining balance method). |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DDB(3500, 500, 5, 1, 2));
```
