// This example shows how to get the visibility status of pivot items.

// How to check which pivot items are currently visible or hidden.

// Create a pivot table, add data to it then get the visibility of specified pivot items.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Sales');

worksheet.GetRange('B2').SetValue('North');
worksheet.GetRange('B3').SetValue('South');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue(15000);
worksheet.GetRange('C3').SetValue(12000);
worksheet.GetRange('C4').SetValue(8000);
worksheet.GetRange('C5').SetValue(9500);

let dataRef = Api.GetRange(`'${worksheet.Name}'!$B$1:$C$5`);
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Region'
});

pivotTable.AddDataField('Sales');

let pivotWorksheet = Api.GetActiveSheet();
let regionField = pivotTable.GetPivotFields('Region');
let regionItems = regionField.GetPivotItems();

// Hide one region item to demonstrate visibility changes
regionItems[2].Visible = false;

pivotWorksheet.GetRangeByNumber(8, 0).SetValue('Region item visibility');

for (let i = 0; i < regionItems.length; i += 1) {
    let isVisible = regionItems[i].GetVisible();
    let status = isVisible ? 'Visible' : 'Hidden';
    pivotWorksheet.GetRangeByNumber(8 + i, 1).SetValue(regionItems[i].GetName() + ': ' + status);
}
