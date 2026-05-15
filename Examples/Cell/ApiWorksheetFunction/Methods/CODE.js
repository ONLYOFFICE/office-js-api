// Get the numeric code value for the first character in a text string in a spreadsheet.

// Retrieve the character set number that identifies the first letter of a word in a spreadsheet.

// Convert the first character of your text into its underlying numeric representation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CODE("office"));