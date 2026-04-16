// Find out the class type of a comment object in a spreadsheet.

// How can I get the class type of a comment in a spreadsheet?

// Get the class type of a comment and display it in the spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);