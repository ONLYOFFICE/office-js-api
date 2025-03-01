# CEILING

Rounds a number up, to the nearest multiple of significance.

## Syntax

```javascript
expression.CEILING(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. |

## Returns

number

## Example

This example shows how to round a number up, to the nearest multiple of significance.

```javascript editor-xlsx
// How to round a number up.

// Use function to round a number up the nearest integer or to the nearest multiple of significance.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CEILING(1.23, 0.1));
```
