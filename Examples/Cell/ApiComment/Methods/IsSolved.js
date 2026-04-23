// Check whether a comment has been marked as resolved in a spreadsheet.

// How do I tell if a comment has already been resolved or is still open in a spreadsheet?

// Verify the resolved state of a comment to decide if further action is needed in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
worksheet.GetRange("B3").SetValue(comment.IsSolved());