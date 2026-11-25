// Rename the Values field heading in a pivot table.

// Sales and Units share a heading when both are added as data fields.

// Use Measures as the heading above the two totals.

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

pivotTable.SetDataCaption('Measures');
