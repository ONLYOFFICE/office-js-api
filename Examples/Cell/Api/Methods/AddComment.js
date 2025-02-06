// This example adds a comment to the document.
// How to add comments in a worksheet.
// Insert a comment into a cell.
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2" );
var arrComments = Api.GetComments();
var oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("Commet Text: ", arrComments[0].GetText());
oWorksheet.GetRange("B1").SetValue("Commet Author: ", arrComments[0].GetAuthorName());