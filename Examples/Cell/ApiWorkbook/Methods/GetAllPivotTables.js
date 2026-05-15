// Collect every pivot table across all sheets of a workbook in a spreadsheet.

// How do I loop through all pivot tables at once in a spreadsheet?

// Populate each pivot table with a data field by iterating the full list in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange('Sheet1!B1:C3');
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);

workbook.GetAllPivotTables().forEach(function (pivot) {
	pivot.AddDataField('Price');
});