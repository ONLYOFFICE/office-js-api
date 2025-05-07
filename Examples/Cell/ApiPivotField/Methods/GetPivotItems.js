// This example shows how to get items of a pivot field.

// How to get a pivot field items.

// Create a pivot table, add data to it then get items of a specified pivot field as an array.

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

pivotTable.AddFields({
    rows: 'Region',
    columns: 'Style',
});

let pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');

let pivotField = pivotTable.GetPivotFields('Region');
let pivotItems = pivotField.GetPivotItems();
pivotWorksheet.GetRange('A10').SetValue('Region pivot items');

for (let i = 0; i < pivotItems.length; i += 1) {
    pivotWorksheet.GetRangeByNumber(9 + i, 1).SetValue(pivotItems[i].GetName());
}