// Arrange filter fields across multiple columns or rows in the report filter area in a spreadsheet.

// How do I control how many filter fields appear per row above a pivot table in a spreadsheet?

// Adjust the layout of the filter section so it wraps after a set number of fields in a spreadsheet.

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
    pages: ['Region','Style', 'Price'],
});

pivotTable.SetDisplayFieldsInReportFilterArea('OverThenDown', 3);
const info = pivotTable.GetDisplayFieldsInReportFilterArea();

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Type');
pivotWorksheet.GetRange('B9').SetValue(info.Type);

pivotWorksheet.GetRange('A10').SetValue('ReportFilterFields');
pivotWorksheet.GetRange('B10').SetValue(info.ReportFilterFields);