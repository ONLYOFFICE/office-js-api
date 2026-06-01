// Verify the object category of a cell comment in a spreadsheet.

// How do I confirm what kind of object a cell comment is classified as in a spreadsheet?

// Display the category label that identifies a comment object to distinguish it from other element types in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
let comment = range.GetComment();
let type = comment.GetClassType();
worksheet.GetRange("A3").SetValue("Type: " + type);