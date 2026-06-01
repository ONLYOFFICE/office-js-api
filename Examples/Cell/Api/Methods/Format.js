// Apply a number format pattern to a value in a spreadsheet.

// How do I format a number using a custom pattern in a spreadsheet?

// Display a value with a specific formatting style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let format = Api.Format("123456", "$#,##0");
worksheet.GetRange("A1").SetValue(format);