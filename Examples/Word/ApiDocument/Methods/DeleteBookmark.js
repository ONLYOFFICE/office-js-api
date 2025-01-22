// This example removes a bookmark from the document.
let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);