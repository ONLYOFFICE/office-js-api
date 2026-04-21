// Create a shortcut that jumps to another location in the current workbook, or opens a document stored on your hard drive, a network server, or on the Internet.

// How to create a hyperlink in a spreadsheet.

// Use a function to add url to the text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPERLINK("https://example.com/files/example.xlsx", "Click here"));