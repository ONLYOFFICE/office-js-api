// Add a value field to a pivot table in a spreadsheet.

// How do I include a numeric column as a calculated value in a pivot table in a spreadsheet?

// Assign a custom label to the data field after inserting it into the pivot table in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');