// This example removes a bookmark from the document.
let document = Api.GetDocument(); 
let paragraph = document.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = document.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
document.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
document.Push(paragraph);