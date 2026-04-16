// Clear the range in a spreadsheet.

// How to clear a content of a range in a spreadsheet.

// Get a range and remove everything from it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");