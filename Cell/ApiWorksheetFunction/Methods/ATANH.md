# ATANH

Returns the inverse hyperbolic tangent of a number.

## Syntax

```javascript
expression.ATANH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number between -1 and 1 excluding -1 and 1. |

## Returns

number

## Example

This example shows how to return the inverse hyperbolic tangent.

```javascript editor-xlsx
// How to get return the inverse hyperbolic tangent.

// Use function to get an inverse hyperbolic tangent.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ATANH(0.5));
```
