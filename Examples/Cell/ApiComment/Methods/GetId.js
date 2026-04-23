// Retrieve the unique identifier assigned to a cell comment in a spreadsheet.

// How do I get the ID that uniquely identifies a comment on a cell in a spreadsheet?

// Look up a comment's own identifier so it can be referenced or tracked programmatically in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetId());