// Return the number of periods required by an investment to reach a specified value in a spreadsheet.

// How to get periods required to get a value of an investment in a spreadsheet.

// Use a function to get the number of periods required by an investment to reach a specified value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));