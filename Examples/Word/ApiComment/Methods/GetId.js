// This example shows how to get the comment ID.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let comment = doc.GetCommentById(comments[0].GetId());
let authorName = comment.GetAutorName();
paragraph = Api.CreateParagraph();
paragraph.AddText("Comment author name: " + authorName);
doc.Push(paragraph);