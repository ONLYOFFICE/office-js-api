# CHOOSE

Chooses a value or action to perform from a list of values, based on an index number.

## Syntax

```javascript
expression.CHOOSE(arg1, args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The position of the value in the list of values, a numeric value greater than or equal to 1 but less than the number of values in the list of values. |
| args | Required | number \| string \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | Up to 254 values or the selected range of cells to analyze. The first argument is required, subsequent arguments are optional. Arguments can be numbers, ranges, names, or text strings. |

## Returns

number

## Example

This example shows how to choose a value or action to perform from a list of values, based on an index number.

```javascript editor-xlsx
// How to choose a value or action to perform from a list of values, based on an index number.

// Use function to choose a value or action to perform from a list of values, based on an index number.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CHOOSE(2, 3, 4, 89, 76, 0));
```
