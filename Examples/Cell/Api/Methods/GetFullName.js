// Get the full name of the currently opened file in a spreadsheet.

// How to get a full name of the file in a spreadsheet.

// Insert a full name of the file into a cell.

let worksheet = Api.GetActiveSheet();
let name = Api.GetFullName();
worksheet.GetRange("B1").SetValue("File name: " + name);