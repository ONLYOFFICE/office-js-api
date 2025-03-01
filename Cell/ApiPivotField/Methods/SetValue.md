# SetValue

Sets a value representing the name of the specified field in the pivot table report.

## Syntax

```javascript
expression.SetValue(name);
```

`expression` - A variable that represents a [ApiPivotField](../ApiPivotField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | Required | string |  | The name of the specified field in the pivot table report. |

## Returns

This method doesn't return any data.

## Example

This example shows how to set value of a pivot field.

```javascript editor-xlsx
// How to change a pivot field value.

// Create a pivot table, add data to it then set value of a specified pivot.

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
	rows: ['Region', 'Style'],
});
pivotTable.SetRowAxisLayout("Tabular", false);

pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
var pivotField = pivotTable.GetPivotFields('Style');

pivotWorksheet.GetRange('A12').SetValue('Style field value');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetValue());

pivotWorksheet.GetRange('A14').SetValue('New Style field value');
pivotField.SetValue('My value');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetValue());

```
