# GetSourceName

Returns a source name for the pivot table field.

## Syntax

```javascript
expression.GetSourceName();
```

`expression` - A variable that represents a [ApiPivotDataField](../ApiPivotDataField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example shows how to get a source name of a pivot field.

```javascript editor-xlsx
// How to get a pivot field's source name.

// Create a pivot table, add data to it then get source name of a specified pivot field.

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
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetName());

pivotWorksheet.GetRange('A14').SetValue('New Style field name');
pivotField.SetName('My name');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetName());

pivotWorksheet.GetRange('A15').SetValue('Source Style field name');
pivotWorksheet.GetRange('B15').SetValue(pivotField.GetSourceName());
```
