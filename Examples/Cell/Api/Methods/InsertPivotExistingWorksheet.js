// This example shows how to insert PivotTable on existing worksheet.

// How to insert a pivot table into a range of an existing worksheet using references.

// Get a pivot table and insert it to the range.

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
