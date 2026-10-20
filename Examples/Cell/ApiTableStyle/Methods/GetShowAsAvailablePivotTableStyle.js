// Read whether a custom table style is offered when formatting a pivot table in a spreadsheet.

// A newly added style starts hidden from the pivot table style gallery until it is explicitly shown.

// Report the initial pivot table style visibility of a new custom style in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Available for pivot tables:');
worksheet.GetRange('B1').SetValue(customStyle.GetShowAsAvailablePivotTableStyle());
