// Remove a comment from a cell entirely in a spreadsheet.

// How do I delete a comment that was added to a cell range in a spreadsheet?

// Clean up a cell by adding a comment and then erasing it to leave no annotation behind in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
comment.Delete();
worksheet.GetRange("A3").SetValue("The comment was just deleted from A1.");