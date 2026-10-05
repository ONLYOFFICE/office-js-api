// Count the table styles available in a workbook in a spreadsheet.

// The count includes the built-in table, pivot table and slicer styles and every custom style; custom styles come last in name order.

// List the custom table styles of a workbook by their index in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
tableStyles.Add('Report Blue');
tableStyles.Add('Report Green');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Table styles:');
worksheet.GetRange('B1').SetValue(tableStyles.GetCount());

let row = 2;
for (let i = 1; i <= tableStyles.GetCount(); i++) {
    let style = tableStyles.GetItem(i);
    if (!style.GetBuiltIn()) {
        worksheet.GetRange('A' + row).SetValue(style.GetName());
        row++;
    }
}
