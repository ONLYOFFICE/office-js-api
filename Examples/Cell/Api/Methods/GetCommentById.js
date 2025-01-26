// This example shows how to get a comment from the current document by its ID.
let comment = Api.AddComment("Comment", "Bob");
let id = comment.GetId();
comment = Api.GetCommentById(id);
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Comment Text: ", comment.GetText());
worksheet.GetRange("B1").SetValue("Comment Author: ", comment.GetAuthorName());