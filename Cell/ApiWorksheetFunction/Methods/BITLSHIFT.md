# BITLSHIFT

Returns a number shifted left by the specified number of bits.

## Syntax

```javascript
expression.BITLSHIFT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of bits by which the number will be shifted left. |

## Returns

number

## Example

This example shows how to return a number shifted left by the specified number of bits.

```javascript editor-xlsx
// How to get a result from bits left shift.

// Use function to calculate bitwise left shift operation.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITLSHIFT(4, 2));
```
