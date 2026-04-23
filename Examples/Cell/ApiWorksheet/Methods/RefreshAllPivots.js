// Update every pivot table on the sheet with the latest data in a spreadsheet.

// How do I refresh all pivot tables at once in a spreadsheet?

// Reload pivot table values so they reflect the current source data in a spreadsheet.

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

worksheet.RefreshAllPivots();