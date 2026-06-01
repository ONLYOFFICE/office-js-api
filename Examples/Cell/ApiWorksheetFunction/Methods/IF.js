// Return different values based on whether a condition is true or false in a spreadsheet.

// How do I test a condition and display different results in a spreadsheet?

// Execute conditional logic to display specific values when criteria are met in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IF("12<100", 0, 1));