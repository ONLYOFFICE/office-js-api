# InsertPivotExistingWorksheet

Inserts PivotTable on existing worksheet.

## Syntax

expression.InsertPivotExistingWorksheet(dataRef, pivotRef, confirmation);

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Source data range. |
| pivotRef | Required | [ApiRange](../../ApiRange/ApiRange.md) |  | Range in which the table will be located. |
| confirmation | Required | bool |  | Replace the data in pivotRef (if it exists) or create a dialog box for this (if it exists). |

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
