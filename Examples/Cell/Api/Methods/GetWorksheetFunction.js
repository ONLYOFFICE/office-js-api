// Access and run built-in calculation functions in a spreadsheet.

// How do I use built-in math and text functions in a spreadsheet?

// Apply a built-in function to a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASC("text"));