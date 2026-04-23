// Find the position of a substring within text in a spreadsheet.

// How do I search for specific text inside a larger text string in a spreadsheet?

// Locate where one piece of text begins within another in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIND("line", "Online Office"));