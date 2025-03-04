# CEILING_PRECISE

Returns a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing.

## Syntax

```javascript
expression.CEILING_PRECISE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. If it is omitted, the default value of 1 is used. If it is set to zero, the function returns 0. |

## Returns

number

## Example

This example shows how to return a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing.

```javascript editor-xlsx
// How to round a number up precisely.

// Use function to round a negative or positive number up the nearest integer or to the nearest multiple of significance.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CEILING_PRECISE(-6.7, 2));
```
