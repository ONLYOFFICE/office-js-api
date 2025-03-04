# ShowDetails

Shows details of the pivot table cell.

## Syntax

```javascript
expression.ShowDetails(rowLine, colLine);
```

`expression` - A variable that represents a [ApiPivotTable](../ApiPivotTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowLine | Required | number |  | The position of the pivot line (a line of rows in the pivot table) on the row area. |
| colLine | Required | number |  | The position of the pivot line (a line of columns in the pivot table) on the column area. |

## Returns

boolean

## Example

This example shows how to show details of a pivot table.

```javascript editor-xlsx
// How to display details of a field using its position.

// Create a pivot table, add data to it then get and show its fiels details.

var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Style');
oWorksheet.GetRange('D1').SetValue('Price');

oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('B4').SetValue('East');
oWorksheet.GetRange('B5').SetValue('West');

oWorksheet.GetRange('C2').SetValue('Fancy');
oWorksheet.GetRange('C3').SetValue('Fancy');
oWorksheet.GetRange('C4').SetValue('Tee');
oWorksheet.GetRange('C5').SetValue('Tee');

oWorksheet.GetRange('D2').SetValue(42.5);
oWorksheet.GetRange('D3').SetValue(35.2);
oWorksheet.GetRange('D4').SetValue(12.3);
oWorksheet.GetRange('D5').SetValue(24.8);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
	rows: 'Region',
	columns: 'Style',
});

pivotTable.AddDataField('Price');

pivotTable.ShowDetails(1, 3);

var showDetailsSheet = Api.GetActiveSheet();
showDetailsSheet.GetRange('A5').SetValue('East details');

```
