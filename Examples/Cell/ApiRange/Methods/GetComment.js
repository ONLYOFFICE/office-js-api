// Read the comment attached to a cell range in a spreadsheet.

// How do I retrieve the text of a comment on a cell in a spreadsheet?

// Display a cell's comment text in another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: " + range.GetComment().GetText());