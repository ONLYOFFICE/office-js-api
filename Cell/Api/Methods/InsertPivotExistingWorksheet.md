# InsertPivotExistingWorksheet

Inserts the specified pivot table into an existing worksheet.

## Syntax

expression.InsertPivotExistingWorksheet(dataRef, pivotRef, confirmation);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | The source data range. |
| pivotRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | A range in which the pivot table will be located. |
| confirmation | Required | bool |  | Specifies whether to replace the data in the specified pivot table range (if it exists) or create a dialog box for this (if it exists). |

## Returns

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)

## Example



```javascript
var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotRef = oWorksheet.GetRange('A7');
var pivotTable = Api.InsertPivotExistingWorksheet(dataRef, pivotRef);

```
