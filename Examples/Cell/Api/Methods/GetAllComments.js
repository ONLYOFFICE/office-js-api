// Collect every comment from all sheets into one list in a spreadsheet.

// How do I retrieve all comments that exist anywhere in a spreadsheet?

// Gather every annotation added by any author in a spreadsheet.

let worksheet = Api.GetActiveSheet();Api.AddComment("Comment 1", "John Smith");
worksheet.GetRange("A4").AddComment("Comment 2", "Mark Potato");
let arrComments = Api.GetAllComments();
worksheet.GetRange("A1").SetValue("Comment text: " + arrComments[1].GetText());
worksheet.GetRange("A2").SetValue("Comment author: " + arrComments[1].GetAuthorName());