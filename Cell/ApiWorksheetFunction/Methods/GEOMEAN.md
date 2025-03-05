# GEOMEAN

Returns the geometric mean of positive numeric data.

## Syntax

```javascript
expression.GEOMEAN(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| number[] \| [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the geometric mean will be calculated. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.GEOMEAN(28, 16, 878, 800, 1650, 2000);
worksheet.GetRange("B2").SetValue(ans);


```
