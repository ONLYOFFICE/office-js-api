# SLN

Returns the straight-line depreciation of an asset for one period.

## Syntax

```javascript
expression.SLN(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The initial cost of the asset. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The salvage value of the asset at the end of its lifetime. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset). |

## Returns

number

## Example

This example shows how to return the straight-line depreciation of an asset for one period.

```javascript editor-xlsx
// How to return the straight-line depreciation of an asset.

// Use a function to get the straight-line depreciation of an asset.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SLN(3500, 500, 5));
```
