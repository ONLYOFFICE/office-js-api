// Retrieve a named bookmark from a document.

// How do I find a bookmark by name in a document?

// Look up a bookmark to read the text it covers in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 11);
range1.AddBookmark("Bookmark_ex");
let bookmark = doc.GetBookmark("Bookmark_ex");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name '" + bookmark.GetName() + "' surrounds text: " + bookmark.GetText());