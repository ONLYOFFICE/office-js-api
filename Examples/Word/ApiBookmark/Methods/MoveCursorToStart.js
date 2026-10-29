// Move the cursor to the start of a bookmark in a document.

// The cursor is placed at the start of the bookmarked text without selecting it.

// Insert a word where the bookmarked text starts.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Builder");
let range = doc.Search("Builder")[0];
range.AddBookmark("Product");
let bookmark = doc.GetBookmark("Product");
bookmark.MoveCursorToStart();
doc.EnterText("Document ");
