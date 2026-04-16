// Replace a part of a text string with a different text string in a spreadsheet.

// How to replace a substring with another one in a spreadsheet.

// Use a function to replace one part of a text with another one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPLACE("Online Office", 8, 6, "portal"));