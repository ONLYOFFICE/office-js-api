// Return the starting position of one text string within another text string. This function is case-sensitive in a spreadsheet.

// How to get an index of a substring from a string in a spreadsheet.

// Use function to find out a starting position of a substring containing in another text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIND("line", "Online Office"));