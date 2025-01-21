// This example shows how to get the comment ID.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = document.GetAllComments();
let id = comments[0].GetId();
let comment = document.GetCommentById(id);
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
document.Push(paragraph);