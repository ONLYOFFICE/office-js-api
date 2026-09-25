// Check whether a table style element carries any formatting in a spreadsheet.

// An element reports formatting when it carries an explicitly defined format; a new untouched element does not.

// Compare a filled header row element against an untouched total row element in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();

let headerRow = styleElements.GetItem('xlHeaderRow');
let totalRow = styleElements.GetItem('xlTotalRow');
headerRow.SetFillColor(Api.RGB(31, 78, 121));

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Header row has format:');
worksheet.GetRange('B1').SetValue(headerRow.GetHasFormat());
worksheet.GetRange('A2').SetValue('Total row has format:');
worksheet.GetRange('B2').SetValue(totalRow.GetHasFormat());
