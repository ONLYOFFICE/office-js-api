// Retrieve every comment left on a worksheet in a spreadsheet.

// How do I list all comments on a sheet in a spreadsheet?

// Read comment text by collecting all annotations from the worksheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comments = worksheet.GetComments();
worksheet.GetRange("A4").SetValue("Comment: " + comments[0].GetText());