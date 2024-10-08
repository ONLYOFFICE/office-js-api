# MEDIAN

Returns the median, or the number in the middle of the set of given numbers.

## Syntax

expression.MEDIAN(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number &#124; string &#124; array &#124; [ApiRange](../../ApiRange/ApiRange.md) |  | Up to 255 numeric values for which the median will be calculated. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example



```javascript
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var median = oFunction.MEDIAN(4,45,12,34,3,54,2,2);
oWorksheet.GetRange("C1").SetValue(median);



```
