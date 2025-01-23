# PRODUCT

Multiplies all the numbers given as arguments.

## Syntax

expression.PRODUCT(args);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | number | [ApiRange](../../ApiRange/ApiRange.md) | number[] |  | Up to 255 numeric values that will be multiplied. The first argument is required, subsequent arguments are optional. Arguments can be numbers, ranges, or arrays of numbers. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.PRODUCT(65, 34, 165, 6, 9, 54));
```
