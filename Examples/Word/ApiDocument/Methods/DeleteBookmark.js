// Delete a named bookmark from a text range in a document.

// How do I remove a bookmark by name after it is no longer needed in a document?

// Clean up temporary navigation markers once they have served their purpose in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder "); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark"); 
doc.DeleteBookmark("Bookmark");
paragraph = Api.CreateParagraph();
paragraph.AddText("The bookmark was removed from this document.");
doc.Push(paragraph);