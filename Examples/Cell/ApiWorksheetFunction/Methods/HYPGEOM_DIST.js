// Calculate the hypergeometric distribution with cumulative or probability density in a spreadsheet.

// How do I compute hypergeometric probabilities with different distribution types in a spreadsheet?

// Return cumulative or probability density values from a hypergeometric distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HYPGEOM_DIST(2, 3, 3, 12, true));