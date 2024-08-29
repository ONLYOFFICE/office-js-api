# BITLSHIFT

Returns a number shifted left by shift_amount bits.

## Syntax

expression.BITLSHIFT(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the decimal representation of the binary number you want to evaluate. |
| arg2 | Required | number |  | Is the number of bits that you want to shift Number left by. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITLSHIFT(4, 2));
```
