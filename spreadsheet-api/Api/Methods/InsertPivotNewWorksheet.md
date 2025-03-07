# InsertPivotNewWorksheet

Inserts the specified pivot table into a new worksheet.

## Syntax

```javascript
expression.InsertPivotNewWorksheet(dataRef, newSheetName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The source data range. |
| newSheetName | Optional | [ApiRange](../../ApiRange/ApiRange.md) |  | A new worksheet name. |

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
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

```
