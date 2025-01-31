# MEDIAN

Returns the median, or the number in the middle of the set of given numbers.

## Syntax

```javascript
expression.MEDIAN(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number | [ApiRange](../../ApiRange/ApiRange.md) | array | [ApiName](../../ApiName/ApiName.md) |  | Up to 255 numeric values for which the median will be calculated. The first argument is required, subsequent arguments are optional. Arguments can be numbers, names, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var median = oFunction.MEDIAN(4,45,12,34,3,54,2,2);
oWorksheet.GetRange("C1").SetValue(median);



```
