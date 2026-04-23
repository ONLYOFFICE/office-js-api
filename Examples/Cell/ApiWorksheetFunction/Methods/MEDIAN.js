// Find the middle value from a set of numbers in a spreadsheet.

// What is the median number in a list in a spreadsheet?

// Extract the median value from a range of values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let median = func.MEDIAN(4,45,12,34,3,54,2,2);
worksheet.GetRange("C1").SetValue(median);

