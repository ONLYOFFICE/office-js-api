# DVAR

Estimates variance based on a sample from the selected database entries.

## Syntax

```javascript
expression.DVAR(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells that makes up the list or database. A database is a list of related data. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string |  | The column which is used in the function. Either the label of the column in double quotation marks or a number that represents the column's position in the list. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The range of cells that contains the conditions you specify. The range includes at least one column label and at least one cell below the column label for a condition. |

## Returns

number

## Example

This example shows how to estimate variance based on a sample from the selected database entries.

```javascript editor-xlsx
// How to estimate variance.

// Use function to calculate a variance from a range sample.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Month");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue("Jan");
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Andrew");
oWorksheet.GetRange("B3").SetValue("Jan");
oWorksheet.GetRange("C3").SetValue(300);
oWorksheet.GetRange("A4").SetValue("Bob");
oWorksheet.GetRange("B4").SetValue("Jan");
oWorksheet.GetRange("C4").SetValue(250);
oWorksheet.GetRange("E1").SetValue("Month");
oWorksheet.GetRange("E2").SetValue("Jan");
oWorksheet.GetRange("F1").SetValue("Sales");
oWorksheet.GetRange("F2").SetValue(">200");
var oRange1 = oWorksheet.GetRange("A1:C4");
var oRange2 = oWorksheet.GetRange("E1:F2");
oWorksheet.GetRange("F4").SetValue(oFunction.DVAR(oRange1, "Sales", oRange2));
```
