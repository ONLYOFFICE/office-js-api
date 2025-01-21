// This example shows how to get a comment from the document by its ID.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let id = comments[0].GetId();
let comment = document.GetCommentById(id);
let author = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + author);
document.Push(paragraph);