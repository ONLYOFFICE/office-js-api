// Set the comment text in a spreadsheet.

// How to change a comment text in a spreadsheet.

// Replace a comment text with a new text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");