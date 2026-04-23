// Find the smallest value in a list that includes text and logical values in a spreadsheet.

// What is the minimum value across mixed data types in a spreadsheet?

// Compare different value types to find the lowest one in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let minA = func.MINA(23, 45, true, "text", 0.89);
worksheet.GetRange("C1").SetValue(minA);