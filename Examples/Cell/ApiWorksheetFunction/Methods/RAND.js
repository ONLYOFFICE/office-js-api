// Generate a random number between 0 and 1 in a spreadsheet.

// How do I create a random decimal value in a spreadsheet?

// Insert an unpredictable number that recalculates each time the spreadsheet updates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RAND());