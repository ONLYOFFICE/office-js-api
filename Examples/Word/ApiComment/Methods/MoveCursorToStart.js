// Move the cursor to the start of the commented text in a document.

// The cursor is placed where the text the comment is attached to begins.

// Insert a word where the commented text starts.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("Builder")[0];
let comment = range.AddComment("Check this word.", "John Smith");
comment.MoveCursorToStart();
doc.EnterText("Document ");
