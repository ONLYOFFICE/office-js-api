// Read the background color of a table style element in a spreadsheet.

// A style element with no fill assigned reports No Fill instead of a color.

// Compare the header row fill before and after a color is assigned in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
let customStyle = tableStyles.Add('HeaderBlue');
let styleElements = customStyle.GetTableStyleElements();
let headerRow = styleElements.GetItem('xlHeaderRow');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Header row fill before:');
worksheet.GetRange('B1').SetValue(headerRow.GetFillColor());

headerRow.SetFillColor(Api.RGB(68, 114, 196));
worksheet.GetRange('A2').SetValue('Header row fill after:');
worksheet.GetRange('B2').SetValue(headerRow.GetFillColor().GetHex());
