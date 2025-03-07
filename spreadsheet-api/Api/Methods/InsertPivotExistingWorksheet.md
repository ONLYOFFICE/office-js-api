# InsertPivotExistingWorksheet

Inserts the specified pivot table into an existing worksheet.

## Syntax

```javascript
expression.InsertPivotExistingWorksheet(dataRef, pivotRef, confirmation);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The source data range. |
| pivotRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range in which the pivot table will be located. |
| confirmation | Required | boolean |  | Specifies whether to replace the data in the specified pivot table range (if it exists) or create a dialog box for this (if it exists). |

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)

## Example



```javascript editor-xlsx
let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotRef = worksheet.GetRange('A7');
let pivotTable = Api.InsertPivotExistingWorksheet(dataRef, pivotRef);

```
