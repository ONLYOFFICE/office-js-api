// Calculate how many ways you can arrange a selection of objects in a spreadsheet.

// How do I find the number of arrangements for selected items in a spreadsheet?

// Determine the count of unique permutations from a pool of distinct objects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PERMUT(32, 2));