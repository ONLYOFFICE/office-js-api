// Add a pivot table to an existing sheet in a spreadsheet.

// How do I place a pivot table on a sheet that already exists in a spreadsheet?

// Summarize data with a pivot table on the current sheet in a spreadsheet.

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