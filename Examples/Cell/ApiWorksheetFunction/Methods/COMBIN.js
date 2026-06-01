// Count possible combinations from a set of items in a spreadsheet.

// How many different ways can you select items in a spreadsheet?

// Calculate the total number of unique selections you can make in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMBIN(67, 7));