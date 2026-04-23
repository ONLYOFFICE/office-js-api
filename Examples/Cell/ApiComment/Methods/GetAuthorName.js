// Read the name of the person who wrote a cell comment in a spreadsheet.

// How do I find out who authored a comment attached to a cell in a spreadsheet?

// Identify the contributor behind a cell annotation by retrieving the author name stored with the comment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's author: ");
worksheet.GetRange("B3").SetValue(comment.GetAuthorName());