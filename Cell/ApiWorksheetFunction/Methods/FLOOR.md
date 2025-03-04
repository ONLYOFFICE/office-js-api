# FLOOR

Rounds a number down to the nearest multiple of significance.

## Syntax

```javascript
expression.FLOOR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value to round down. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round down to. The number to round down and the multiple of significance must have the same sign. |

## Returns

number

## Example

This example shows how to round a number down to the nearest multiple of significance.

```javascript editor-xlsx
// How to round a number down to the nearest multiple of significance.

// Use function to round down.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.FLOOR(5.786, 0.7));
```
