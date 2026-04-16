// Check the class type returned by a comment in a spreadsheet.

// How do I check what type a comment object is in a spreadsheet?

// Retrieve and output the class type string for a comment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);