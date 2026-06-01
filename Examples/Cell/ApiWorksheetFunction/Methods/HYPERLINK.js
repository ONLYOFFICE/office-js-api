// Create a clickable hyperlink to a URL or workbook location in a spreadsheet.

// How do I add a hyperlink to text in a spreadsheet?

// Link text to a website or file using a hyperlink in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));