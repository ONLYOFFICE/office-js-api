// This example shows how to insert PivotTable on existing worksheet.

// How to insert a pivot table into a range of an existing worksheet using references.

// Get a pivot table and insert it to the range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotRef = worksheet.GetRange('A7');
let pivotTable = Api.InsertPivotExistingWorksheet(dataRef, pivotRef);
