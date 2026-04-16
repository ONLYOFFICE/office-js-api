// Return the smallest value in a set of values. Does not ignore logical values and text in a spreadsheet.

// How to get a minimum from a list including text and logical values in a spreadsheet.

// Use a function to find a minimum from a list of objects in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let minA = func.MINA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(minA);