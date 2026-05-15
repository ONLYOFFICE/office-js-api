// Rename an existing bookmark to a new identifier in a document.

// How do I change the name of a bookmark already placed in a document?

// Update a bookmark's label so it can be referenced under a different name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_A");
let bookmark = doc.GetBookmark("Bookmark_A");
let oldName = bookmark.GetName();
bookmark.SetName("Bookmark_B");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark name changed from: '" + oldName + "' to: '" + bookmark.GetName() + "'");