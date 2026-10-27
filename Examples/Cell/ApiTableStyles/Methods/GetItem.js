// Look up a table style by name in a workbook in a spreadsheet.

// The lookup matches the name regardless of case and finds both custom and built-in styles.

// Search for a custom style and a built-in style, then report whether each one was found in a spreadsheet.

let workbook = Api.GetActiveWorkbook();
let tableStyles = workbook.GetTableStyles();
tableStyles.Add('ReportStyle');

let customStyle = tableStyles.GetItem('reportstyle');
let builtInStyle = tableStyles.GetItem('TableStyleMedium2');

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('Custom style found:');
worksheet.GetRange('B1').SetValue(customStyle !== null);
worksheet.GetRange('A2').SetValue('Built-in style found:');
worksheet.GetRange('B2').SetValue(builtInStyle !== null);
