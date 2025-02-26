// This example shows how to get all comments from the worksheet.

// How to get all comments from the worksheet.

// Get all cell comments.

var oWorksheet = Api.GetActiveSheet();
Api.AddComment("Comment 1", "John Smith");
oWorksheet.GetRange("A4").AddComment("Comment 2", "Mark Potato" );
var arrComments = Api.GetAllComments();
oWorksheet.GetRange("A1").SetValue("Comment text: " + arrComments[1].GetText());
oWorksheet.GetRange("A2").SetValue("Comment author: " + arrComments[1].GetAuthorName());