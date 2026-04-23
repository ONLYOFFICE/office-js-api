// Update the written message of an existing comment in a spreadsheet.

// How do I replace the text inside a comment with new content in a spreadsheet?

// Overwrite an outdated comment message with a revised note in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
comment.SetText("New comment text");