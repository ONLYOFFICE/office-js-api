// This example shows how to get an index of pivot field of a data field.
// How to use a table element pivot field.
// Create a pivot table, add data to it then display a custom data field's pivot index.
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

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

var pivotWorksheet = Api.GetActiveSheet();
var dataField = pivotTable.GetDataFields('Sum of Price');

pivotWorksheet.GetRange('A15').SetValue('Sum of Price position:');
pivotWorksheet.GetRange('B15').SetValue(dataField.GetIndex());

pivotWorksheet.GetRange('A16').SetValue('Price position:');
pivotWorksheet.GetRange('B16').SetValue(dataField.GetPivotField().GetIndex());