var oWorksheet = Api.GetActiveSheet();

oWorksheet.GetRange('B1').SetValue('Region');
oWorksheet.GetRange('C1').SetValue('Price');
oWorksheet.GetRange('B2').SetValue('East');
oWorksheet.GetRange('B3').SetValue('West');
oWorksheet.GetRange('C2').SetValue(42.5);
oWorksheet.GetRange('C3').SetValue(35.2);

var dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
var pivotRef = oWorksheet.GetRange('A7');
Api.InsertPivotExistingWorksheet(dataRef, oWorksheet.GetRange('A7'));
Api.InsertPivotExistingWorksheet(dataRef, oWorksheet.GetRange('D7'));
Api.InsertPivotExistingWorksheet(dataRef, oWorksheet.GetRange('G7'));

oWorksheet.GetAllPivotTables().forEach(function (pivot) {
	pivot.AddDataField('Price');
});
