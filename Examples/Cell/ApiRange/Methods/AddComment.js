// Attach a note to a cell range in a spreadsheet.

// How do I add a comment to a range of cells in a spreadsheet?

// Leave a written remark on a cell so other users see context when they open it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("The comment was added to the cell A1.");
worksheet.GetRange("A4").SetValue("Comment: " + range.GetComment().GetText());