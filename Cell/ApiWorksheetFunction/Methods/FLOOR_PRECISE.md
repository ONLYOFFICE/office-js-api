# FLOOR_PRECISE

Returns a number that is rounded down to the nearest integer or to the nearest multiple of significance. The number is always rounded down regardless of its sign.

## Syntax

```javascript
expression.FLOOR_PRECISE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value to round down. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round down to. If it is omitted, the default value of 1 is used. If it is set to zero, the function returns 0. |

## Returns

number

## Example

This example shows how to return a number that is rounded down to the nearest integer or to the nearest multiple of significance. The number is always rounded down regardless of its sign.

```javascript editor-xlsx
// How to round a number down to the nearest integer regardless its sign.

// Use function to round down a negative/positive number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR_PRECISE(-6.7, 2));
```
