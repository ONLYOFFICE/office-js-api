// This example shows how to clear a pivot table.

// How to remove all elements from a pivot table.

// Create a pivot table, add data to it then delete all its content.

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
let dataField = pivotTable.AddDataField('Price');

dataField.SetName('Regional prices');

pivotTable.AddFields({
    rows: 'Region',
    columns: 'Style',
});

Api.GetActiveSheet().GetRange('F4').SetValue('This pivot table will be cleared soon');

setTimeout(function () {
    pivotTable.ClearTable();
}, 5000);