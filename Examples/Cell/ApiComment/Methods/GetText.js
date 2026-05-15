// Read the text content of a comment in a spreadsheet.

// How do I retrieve the written message stored inside a comment in a spreadsheet?

// Extract what a comment says so it can be displayed or compared in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetText());