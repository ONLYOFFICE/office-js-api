// This example shows how to get column grand of a pivot table.

// How to get column grand from a pivot table.

// Create a pivot table, add data to it then get its column grand.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Style');
worksheet.GetRange('D1').SetValue('Price');

worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue('Fancy');
worksheet.GetRange('C3').SetValue('Fancy');
worksheet.GetRange('C4').SetValue('Tee');
worksheet.GetRange('C5').SetValue('Tee');

worksheet.GetRange('D2').SetValue(42.5);
worksheet.GetRange('D3').SetValue(35.2);
worksheet.GetRange('D4').SetValue(12.3);
worksheet.GetRange('D5').SetValue(24.8);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddDataField('Price');

pivotTable.AddFields({
    columns: 'Region',
    rows: 'Style',
});

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Is Column Grand');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetColumnGrand());