# SUMSQ

Returns the sum of the squares of the arguments.

## Syntax

```javascript
expression.SUMSQ(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) | number | string | boolean | [ApiName](../../ApiName/ApiName.md) | array |  | Up to 255 numeric values for which the sum of the squares will be calculated. The first argument is required, subsequent arguments are optional. The arguments can be numbers, names, logical values or text representations of numbers, ranges of cells that contain numbers, or arrays. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));
```
