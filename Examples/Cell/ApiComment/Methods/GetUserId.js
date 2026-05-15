// Retrieve the unique identifier of the person who wrote a comment in a spreadsheet.

// How do I look up the user ID belonging to the author of a comment in a spreadsheet?

// Identify who created a comment by reading their account identifier in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's user Id: ");
worksheet.GetRange("B3").SetValue(comment.GetUserId());