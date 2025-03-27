// This example adds a comment to the document.
Api.AddComment("Comment 1", "Bob");
Api.AddComment("Comment 2");
let comments = Api.GetComments();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: ", comments[0].GetText());
worksheet.GetRange("B1").SetValue("Comment Author: ", comments[0].GetAuthorName());