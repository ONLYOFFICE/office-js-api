# MULTINOMIAL

Returns the ratio of the factorial of a sum of numbers to the product of factorials.

## Syntax

```javascript
expression.MULTINOMIAL(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Up to 255 numeric values for which the multinomial will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

This example shows how to return the ratio of the factorial of a sum of numbers to the product of factorials.

```javascript editor-xlsx
// How to get a result from the ratio of the factorial of a sum of numbers to the product of factorials.

// Use a function to find the ratio of the factorial of a sum of numbers to the product of factorials.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.MULTINOMIAL(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5));
```
