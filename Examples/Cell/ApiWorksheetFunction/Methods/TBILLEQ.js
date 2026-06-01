// Return the bond-equivalent yield for a treasury bill in a spreadsheet.

// Calculate the bond-equivalent yield for a treasury bill using the TBILLEQ function.

// Returns the bond-equivalent yield value for the specified dates and discount rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));