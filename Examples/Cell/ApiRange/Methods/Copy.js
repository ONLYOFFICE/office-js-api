// Copy a range to the specified range in a spreadsheet.

// How to create identical range in a spreadsheet.

// Get a range and create a copy of it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is a sample text which is copied to the range A3.");
range.Copy(worksheet.GetRange("A3"));