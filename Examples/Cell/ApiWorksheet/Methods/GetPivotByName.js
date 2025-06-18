// This example shows how to get a pivot table by its name.

// How to find a pivot table.

// Get a pivot table and by its name and update its fields.

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