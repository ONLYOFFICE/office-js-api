# SUMSQ

Returns the sum of the squares of the arguments.

## Syntax

```javascript
expression.SUMSQ();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  | Required |  |  | No description provided. |

## Returns

number

## Example

This example shows how to return the sum of the squares of the arguments.

```javascript editor-xlsx
// How to calculate the sum of the squares.

// Use a function to estimate the sum of the squares.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUMSQ(1, 0, 0, 0, 4, 1, 0, 0, 2, 3, 6, 7, 6, 8, 10, 12));
```
