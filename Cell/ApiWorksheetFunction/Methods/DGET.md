# DGET

Extracts from a database a single record that matches the conditions you specify.

## Syntax

expression.DGET(arg1, arg2, arg3);

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Is the range of cells that makes up the list or database. A database is a list of related data. |
| arg2 | Required | number |  | Is either the label of the column in double quotation marks or a number that represents the column's position in the list. |
| arg3 | Required | string |  | Is the range of cells that contains the conditions you specify. The range includes a column label and one cell below the label for a condition. |

## Returns

number, string, boolean

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue("Name");
oWorksheet.GetRange("B1").SetValue("Month");
oWorksheet.GetRange("C1").SetValue("Sales");
oWorksheet.GetRange("A2").SetValue("Alice");
oWorksheet.GetRange("B2").SetValue("Jan");
oWorksheet.GetRange("C2").SetValue(200);
oWorksheet.GetRange("A3").SetValue("Alice");
oWorksheet.GetRange("B3").SetValue("Feb");
oWorksheet.GetRange("C3").SetValue(250);
oWorksheet.GetRange("E1").SetValue("Name");
oWorksheet.GetRange("E2").SetValue("Alice");
oWorksheet.GetRange("F1").SetValue("Month");
oWorksheet.GetRange("F2").SetValue("Feb");
var oRange1 = oWorksheet.GetRange("A1:C3");
var oRange2 = oWorksheet.GetRange("E1:F2");
oWorksheet.GetRange("F4").SetValue(oFunction.DGET(oRange1, "Sales", oRange2));
```
