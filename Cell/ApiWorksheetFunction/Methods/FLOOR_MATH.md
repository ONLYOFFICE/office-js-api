# FLOOR_MATH

Rounds a number down, to the nearest integer or to the nearest multiple of significance.

## Syntax

expression.FLOOR_MATH(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the value you want to round. |
| arg2 | Required | number |  | Is the multiple to which you want to round. |
| arg3 | Required | number |  | When given and nonzero this function will round towards zero. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR_MATH(-5.5, 2, 1));
```
