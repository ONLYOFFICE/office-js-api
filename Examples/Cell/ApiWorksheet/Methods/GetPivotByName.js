// Look up an existing pivot table by name and add fields to it in a spreadsheet.

// How do I access a pivot table by its name in a spreadsheet?

// Find a pivot table, then assign row and data fields to it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

Api.GetActiveSheet().GetPivotByName(pivotTable.GetName()).AddFields({
    rows: 'Region',
});

Api.GetActiveSheet().GetPivotByName(pivotTable.GetName()).AddDataField('Price');