# TRUNC

Truncates a number to an integer by removing the decimal, or fractional, part of the number.

## Syntax

```javascript
expression.TRUNC(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number which will be truncated. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number specifying the precision of the truncation. If this argument is omitted, it is equal to 0 (zero). |

## Returns

number

## Example

This example shows how to truncate a number to an integer by removing the decimal, or fractional, part of the number.

```javascript editor-xlsx
// How to truncate a number to an integer.

// Use a function to truncate a number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TRUNC(3.14159265, 5));
```
