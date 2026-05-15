// Assign a display name to the author of a comment in a spreadsheet.

// How do I change or set the name shown as the author of a comment in a spreadsheet?

// Update who a comment appears to be written by so the correct name is displayed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's author: ");
comment.SetAuthorName("Mark Potato");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());