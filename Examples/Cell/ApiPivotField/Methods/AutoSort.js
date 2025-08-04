// This example shows how to establish automatic field-sorting rules for PivotTable reports.

// How to use the AutoSort method to sort pivot field data.

// Create a pivot table, add data to it then apply automatic sorting to a specified field.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Product');
worksheet.GetRange('D1').SetValue('Sales');
worksheet.GetRange('E1').SetValue('Units');
worksheet.GetRange('F1').SetValue('Priority');

worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue('Laptop');
worksheet.GetRange('C3').SetValue('Phone');
worksheet.GetRange('C4').SetValue('Phone');
worksheet.GetRange('C5').SetValue('Laptop');

worksheet.GetRange('D2').SetValue(1200);
worksheet.GetRange('D3').SetValue(800);
worksheet.GetRange('D4').SetValue(950);
worksheet.GetRange('D5').SetValue(1100);

worksheet.GetRange('E2').SetValue(50);
worksheet.GetRange('E3').SetValue(30);
worksheet.GetRange('E4').SetValue(60);
worksheet.GetRange('E5').SetValue(45);

worksheet.GetRange('F2').SetValue(1);
worksheet.GetRange('F3').SetValue(1);
worksheet.GetRange('F4').SetValue(1);
worksheet.GetRange('F5').SetValue(1);

let dataRef = Api.GetRange(`'${worksheet.GetName()}'!$B$1:$F$5`);
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: ['Region', 'Product'],
    columns: ['Priority'],
});

const salesField = pivotTable.AddDataField('Sales');
const unitsField = pivotTable.AddDataField('Units');
const priorityField = pivotTable.AddDataField('Priority');

// Set pivot table to tabular layout (non-compact)
pivotTable.SetRowAxisLayout('Tabular', false);

let pivotWorksheet = pivotTable.Parent;
let regionField = pivotTable.GetPivotFields('Region');
regionField.AutoSort("xlDescending", regionField.SourceName);
pivotWorksheet.GetRange('A14').SetValue(`Region field will be sorted by item caption in descending order (${regionField.AutoSortOrder} - ${regionField.AutoSortField})`);

let productField = pivotTable.GetPivotFields('Product');
productField.AutoSort("xlAscending", unitsField.Name);
pivotWorksheet.GetRange('A15').SetValue(`Product field will be sorted by Units in ascending order (${productField.AutoSortOrder} - ${productField.AutoSortField})`);

let priorityPivotField = pivotTable.GetPivotFields('Priority');
priorityPivotField.AutoSort("xlManual", priorityField.Name);
pivotWorksheet.GetRange('A16').SetValue(`Priority field set to manual sorting mode (${priorityPivotField.AutoSortOrder} - ${priorityPivotField.AutoSortField})`);
