# FLOOR

Rounds a number down to the nearest multiple of significance.

## Syntax

expression.FLOOR(arg1, arg2);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the numeric value you want to round. |
| arg2 | Required | number |  | Is the multiple to which you want to round. Number and Significance must either both be positive or both be negative. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR(5.786, 0.7));
```
