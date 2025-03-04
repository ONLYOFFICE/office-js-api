# TRANSPOSE

Converts a vertical range of cells to a horizontal range, or vice versa.

## Syntax

```javascript
expression.TRANSPOSE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| array |  | A range of cells on a worksheet or an array that will be transposed. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

This example shows how to convert a vertical range of cells to a horizontal range, or vice versa.

```javascript editor-xlsx
// How to change orientation of cells to vertical/horizontal.

// Use a function to transpose a range.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Ann");
oWorksheet.GetRange("A2").SetValue("Bob");
oWorksheet.GetRange("B1").SetValue("Apples");
oWorksheet.GetRange("B2").SetValue("Oranges");
var oRange = oWorksheet.GetRange("A1:B2");
oWorksheet.GetRange("A4:B5").SetValue(oFunction.TRANSPOSE(oRange));
```
