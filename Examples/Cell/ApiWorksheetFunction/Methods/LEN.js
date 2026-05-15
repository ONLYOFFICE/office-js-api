// Count the number of characters in text in a spreadsheet.

// How do I find out how many letters or characters are in a text string in a spreadsheet?

// Get the total character count of any text value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LEN("Online Office"));