// Get the collection of formatting elements that make up a custom table style in a spreadsheet.

// Each element controls one part of the table, such as the header row, the total row, or a banded stripe.

// Look up the header row element of a new custom style in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');

let styleElements = customStyle.GetTableStyleElements();
let headerRow = styleElements.GetItem('xlHeaderRow');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Header row element found:');
worksheet.GetRange('B1').SetValue(headerRow !== null);
