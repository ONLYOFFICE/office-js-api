// Read the name of an existing bookmark in a document.

// How do I retrieve the name of a bookmark added to a text range in a document?

// Insert a bookmark and display its name as text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
paragraph.AddLineBreak();
paragraph.AddText("Bookmark with name: " + bookmark.GetName());