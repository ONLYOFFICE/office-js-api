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

This example shows how to insert PivotTable on a new worksheet.

```javascript editor-xlsx
// How to insert a pivot table into a range of a new worksheet using references.

// Get an existing pivot table and insert it to the range of a new worksheet.

var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

```
