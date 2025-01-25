// This example marks a comment as solved.
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.", "John Smith");
worksheet.GetRange("A3").SetValue("Comment is solved: ");
comment.SetSolved(true);
worksheet.GetRange("B3").SetValue(comment.IsSolved());