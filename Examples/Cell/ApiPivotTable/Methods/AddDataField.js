// This example shows how to a data field to a pivot table.
// How to add new field to the table.
// Create a pivot table, add data to it then add new data field to it.
var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

var dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
