# POWER

Returns the result of a number raised to a power.

## Syntax

```javascript
expression.POWER(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The base number. It can be any real number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The exponent to which the base number is raised. |

## Returns

number

## Example

This example shows how to return the result of a number raised to a power.

```javascript editor-xlsx
// How to raise a number to a power.

// Use a function to calculate the result after raising a number to the power.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.POWER(23, 4));
```
