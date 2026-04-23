// Jump the cursor to a named bookmark's location in a document.

// How do I navigate directly to a bookmark by name in a document?

// Move focus to a specific marked position so the reader lands at the right spot in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(21, 28);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
bookmark.GoTo();