// Remove all formatting from a table style element in a spreadsheet.

// Clearing removes explicit fill, border, and font formatting while preserving the stripe size.

// Strip the header row formatting from a custom style and confirm it in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();
let headerRow = styleElements.GetItem('xlHeaderRow');

headerRow.SetFillColor(Api.RGB(31, 78, 121));
headerRow.GetFont().SetBold(true);
headerRow.Clear();

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Header row has format after clear:');
worksheet.GetRange('B1').SetValue(headerRow.GetHasFormat());
