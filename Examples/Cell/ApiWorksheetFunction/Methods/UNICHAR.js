// Return the Unicode character referenced by the given numeric value in a spreadsheet.

// The UNICHAR function converts numeric code points to their corresponding characters.

// Apply the function to obtain a character from its Unicode number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UNICHAR(378));