# BESSELK

Returns the modified Bessel function Kn(x).

## Syntax

```javascript
expression.BESSELK(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The order of the function. |

## Returns

number

## Example

This example shows how to return the modified Bessel function Kn(x).

```javascript editor-xlsx
// How to get a result from Bessel function Kn(x).

// Use function to get the Bessel function Kn(x).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BESSELK(1.5, 1));
```
