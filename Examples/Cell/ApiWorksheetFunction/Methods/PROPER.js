// Format text so the first letter of each word is uppercase in a spreadsheet.

// How do I capitalize the first letter of every word in a spreadsheet?

// Convert mixed-case text to proper case format in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PROPER("dAVID CONNOR"));