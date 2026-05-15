// Find where a text string appears within a cell in a spreadsheet.

// How do I locate the position of text within a longer string in a spreadsheet?

// Search for a word and get its character position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCH("line", "Online Office"));