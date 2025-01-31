# FLOOR_MATH

Rounds a number down, to the nearest integer or to the nearest multiple of significance.

## Syntax

```javascript
expression.FLOOR_MATH(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The numeric value to round down. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | The multiple of significance to round down to. If it is omitted, the default value of 1 is used. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) | [ApiName](../../ApiName/ApiName.md) | number |  | Specifies if negative numbers are rounded towards or away from zero. If it is omitted or set to 0, negative numbers are rounded away from zero. If any other numeric value is specified, negative numbers are rounded towards zero. |

## Returns

number

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR_MATH(-5.5, 2, 1));
```
