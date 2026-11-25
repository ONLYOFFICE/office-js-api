// Read the heading for the Values field in a pivot table.

// A pivot table with two data fields shows their shared heading above the field names.

// Display the current heading in a cell below the report.

let worksheet = Api.GetActiveSheet();
let source = worksheet.GetRange('A1:C3');
source.SetValue([
    ['Region', 'Sales', 'Units'],
    ['East', 120, 4],
    ['West', 180, 6]
]);

let pivotTable = Api.InsertPivotNewWorksheet(source);
pivotTable.AddFields({ rows: 'Region' });
pivotTable.AddDataField('Sales');
pivotTable.AddDataField('Units');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A10').SetValue('Values heading');
pivotWorksheet.GetRange('B10').SetValue(pivotTable.GetDataCaption());
