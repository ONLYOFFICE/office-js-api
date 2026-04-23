// Assign a new user identifier to the author of a comment in a spreadsheet.

// How do I update which user account is linked to a comment in a spreadsheet?

// Transfer ownership of a comment to a different user account in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
comment.SetUserId("uid-2");
worksheet.GetRange("B3").SetValue(comment.GetUserId());