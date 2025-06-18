// This example shows how to get the ApiComment object of the range.

// How to get a range comment.

// Get a range, get its comment and show its text in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());