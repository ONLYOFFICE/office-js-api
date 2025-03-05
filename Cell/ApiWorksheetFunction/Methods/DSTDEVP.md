# DSTDEVP

Calculates the standard deviation based on the entire population of the selected database entries.

## Syntax

```javascript
expression.DSTDEVP(arg1, arg2, arg3);
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



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue("Name");
worksheet.GetRange("B1").SetValue("Month");
worksheet.GetRange("C1").SetValue("Sales");
worksheet.GetRange("A2").SetValue("Alice");
worksheet.GetRange("B2").SetValue("Jan");
worksheet.GetRange("C2").SetValue(200);
worksheet.GetRange("A3").SetValue("Andrew");
worksheet.GetRange("B3").SetValue("Jan");
worksheet.GetRange("C3").SetValue(300);
worksheet.GetRange("A4").SetValue("Bob");
worksheet.GetRange("B4").SetValue("Jan");
worksheet.GetRange("C4").SetValue(250);
worksheet.GetRange("E1").SetValue("Month");
worksheet.GetRange("E2").SetValue("Jan");
worksheet.GetRange("F1").SetValue("Sales");
worksheet.GetRange("F2").SetValue(">200");
let range1 = worksheet.GetRange("A1:C4");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("F4").SetValue(func.DSTDEVP(range1, "Sales", range2));
```
