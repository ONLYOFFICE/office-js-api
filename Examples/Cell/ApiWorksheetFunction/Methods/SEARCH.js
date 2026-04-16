// Return the number of the character at which a specific character or text string is first found, reading left to right (not case-sensitive) in a spreadsheet.

// How to get number of characters counting from first occurance of search text in a spreadsheet.

// Use a function to count characters starting from the index at which the search text appears in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCH("line", "Online Office"));