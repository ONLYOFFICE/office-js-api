// Group the dates of a pivot table field by months and years in a spreadsheet.

// How do I show pivot table totals by month and year instead of by day?

// Summarize daily sales by month within each year using date grouping in a pivot table.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1:C1').SetValue([['Date', 'Amount']]);
worksheet.GetRange('B2:C7').SetValue([
    ['2024-01-15', 120],
    ['2024-01-28', 80],
    ['2024-02-10', 150],
    ['2024-12-05', 60],
    ['2025-01-20', 90],
    ['2025-02-14', 110]
]);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$7");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Date',
});

pivotTable.AddDataField('Amount');

// The periods are seconds, minutes, hours, days, months, quarters and years, as in VBA.
let pivotField = pivotTable.GetPivotFields('Date');
let grouped = pivotField.Group(true, true, undefined, [false, false, false, false, true, false, true]);

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('D1').SetValue('Grouped by months and years');
pivotWorksheet.GetRange('E1').SetValue(grouped);