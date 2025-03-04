# SINH

Returns the hyperbolic sine of a number.

## Syntax

```javascript
expression.SINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic sine will be returned. |

## Returns

number

## Example

This example shows how to return the hyperbolic sine of a number.

```javascript editor-xlsx
// How to calaculate the hyperbolic sine of a number.

// Use a function to get a hyperbolic sine of a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SINH(4));
```
