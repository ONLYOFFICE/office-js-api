// Get the collection of table styles stored in a workbook in a spreadsheet.

// The collection holds every built-in and custom table style available for tables and pivot tables in the workbook.

// Add a new custom style to the collection and confirm its name in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('ReportStyle');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('New style name:');
worksheet.GetRange('B1').SetValue(customStyle.GetName());
