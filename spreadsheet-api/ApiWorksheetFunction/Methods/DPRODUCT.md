# DPRODUCT

Multiplies the values in the field (column) of records in the database that match the conditions you specify.

## Syntax

```javascript
expression.DPRODUCT(arg1, arg2, arg3);
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
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Identifier");
worksheet.GetRange("C1").SetValue("Value");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("B2").SetValue("Price");
worksheet.GetRange("C2").SetValue(25);
worksheet.GetRange("A3").SetValue("Apple");
worksheet.GetRange("B3").SetValue("Quantity");
worksheet.GetRange("C3").SetValue(100);
worksheet.GetRange("E1").SetValue("Product");
worksheet.GetRange("E2").SetValue("Apple");
let range1 = worksheet.GetRange("A1:C3");
let range2 = worksheet.GetRange("E1:F2");
worksheet.GetRange("E4").SetValue(func.DPRODUCT(range1, "Value", range2));
```
