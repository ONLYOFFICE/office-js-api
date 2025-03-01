# ASINH

Returns the inverse hyperbolic sine of a number.

## Syntax

```javascript
expression.ASINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number equal to or greater than 1. |

## Returns

number

## Example

This example shows how to return the inverse hyperbolic sine of a number.

```javascript editor-xlsx
// How to get an inverse hyperbolic sine.

// Use function to get an inverse hyperbolic sine of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ASINH(4));
```
