# DOLLARDE

Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.

## Syntax

expression.DOLLARDE(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a number expressed as a fraction. |
| arg2 | Required | any |  | Is the integer to use in the denominator of the fraction. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLARDE(1.03, 16));
```
