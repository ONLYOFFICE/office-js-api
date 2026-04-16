// Set the user ID to the comment author in a spreadsheet.

// How to change a comment author ID in a spreadsheet.

// Replace a comment author ID to a new one in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
comment.SetUserId("uid-2");
worksheet.GetRange("B3").SetValue(comment.GetUserId());