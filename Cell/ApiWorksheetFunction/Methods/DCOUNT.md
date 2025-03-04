# DCOUNT

Counts the cells containing numbers in the field (column) of records in the database that match the conditions you specify.

## Syntax

```javascript
expression.DCOUNT(arg1, arg2, arg3);
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

This example shows how to count the cells containing numbers in the field (column) of records in the database that match the conditions you specify.

```javascript editor-xlsx
// How to count the cells containing numbers in the field (column) of records in the database that match the conditions you specify.

// Use function to count numbers from database records that met a condition specified.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Age");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue(20);
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Andrew");
oWorksheet.GetRange("B3").SetValue(21);
oWorksheet.GetRange("C3").SetValue(300);
oWorksheet.GetRange("E1").SetValue("Sales");
oWorksheet.GetRange("E2").SetValue(">200");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:E2");
oWorksheet.GetRange("E4").SetValue(oFunction.DCOUNT(oRange1, "Sales", oRange2));
```
