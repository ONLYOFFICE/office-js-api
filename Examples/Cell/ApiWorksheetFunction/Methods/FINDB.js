// Find the position of a substring within text, counting bytes in a spreadsheet.

// How do I search for specific text using byte positions in a spreadsheet?

// Locate a text position using byte count instead of character count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FINDB("line", "Online Office"));