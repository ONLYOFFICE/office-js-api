// This example shows how to get all pivot tables from the sheet.

// How to get all pivot tables.

// Get all pivot tables as an array.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotRef = worksheet.GetRange('A7');
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('A7'));
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('D7'));
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('G7'));

worksheet.GetAllPivotTables().forEach(function (pivot) {
    pivot.AddDataField('Price');
});