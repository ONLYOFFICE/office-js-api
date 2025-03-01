# GCD

Returns the greatest common divisor.

## Syntax

```javascript
expression.GCD(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Up to 255 numeric values for which the greatest common divisor will be returned. The first argument is required, subsequent arguments are optional. |

## Returns

number

## Example

This example shows how to calculate the greatest common divisor.

```javascript editor-xlsx
// How to find the greatest common divisor.

// Use a function to calculate the greatest common divisor.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.GCD(28, 16, 878, 800, 1650, 2000));
```
