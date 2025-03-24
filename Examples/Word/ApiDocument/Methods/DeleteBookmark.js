// This example removes a bookmark from the document.

// How to delete a bookmark knowing its name.

// Remove the bookmark from the range.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);