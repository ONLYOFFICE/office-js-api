# BITOR

Returns a bitwise 'Or' of two numbers.

## Syntax

expression.BITOR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the decimal representation of the binary number you want to evaluate. |
| arg2 | Required | number |  | Is the decimal representation of the binary number you want to evaluate. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.BITOR(23, 10));
```
