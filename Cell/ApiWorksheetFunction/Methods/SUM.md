# SUM

Adds all the numbers in a range of cells.

## Syntax

```javascript
expression.SUM();
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|  | Required |  |  | No description provided. |

## Returns

number

## Example

This example shows how to add all the numbers in a range of cells.

```javascript editor-xlsx
// How to sum up all values from the list.

// Use a function to estimate a sum from the cells.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUM(145, 37, 236, 69, 567, 92));
```
