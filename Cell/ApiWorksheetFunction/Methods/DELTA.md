# DELTA

Tests whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.

## Syntax

```javascript
expression.DELTA(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second number. |

## Returns

number

## Example

This example shows how to test whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.

```javascript editor-xlsx
// How to compare two numbers.

// Use function to compare two numbers if it returns 1 they are equal else 0.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DELTA(23, 24));
```
