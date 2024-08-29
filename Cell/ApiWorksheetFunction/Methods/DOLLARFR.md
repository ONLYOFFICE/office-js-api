# DOLLARFR

Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.

## Syntax

expression.DOLLARFR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | any |  | Is a decimal number. |
| arg2 | Required | any |  | Is the integer to use in the denominator of a fraction. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DOLLARFR(1.1875, 16));
```
