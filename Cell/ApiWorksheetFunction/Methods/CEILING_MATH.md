# CEILING_MATH

Rounds a number up, to the nearest integer or to the nearest multiple of significance.

## Syntax

expression.CEILING_MATH(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number |  | Is the value you want to round. |
| arg2 | Required | number |  | Is the multiple to which you want to round. |
| arg3 | Required | number |  | When given and nonzero this function will round away from zero. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CEILING_MATH(-5.5, 2, 1));
```
