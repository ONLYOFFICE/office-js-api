# COSH

Returns the hyperbolic cosine of a number.

## Syntax

```javascript
expression.COSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic cosine will be returned. |

## Returns

number

## Example

This example shows how to get the hyperbolic cosine of a number.

```javascript editor-xlsx
// How to find a hyperbolic cosine.

// Use function to get the hyperbolic cosine of an angle.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.COSH(3));
```
