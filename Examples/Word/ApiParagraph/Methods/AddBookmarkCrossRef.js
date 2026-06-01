// Insert a cross-reference that links to a bookmark in a document.

// How do I add a navigable reference pointing to a named bookmark in a document?

// Connect one paragraph to another location by referencing a bookmark by name in a document.

let doc = Api.GetDocument(); 
let paragraph = doc.GetElement(0); 
paragraph.AddText("ONLYOFFICE Document Builder"); 
let range = doc.GetRange(0, 9); 
range.AddBookmark("Bookmark");
let bookmarks = doc.GetAllBookmarksNames();
paragraph = Api.CreateParagraph();
paragraph.AddText("A bookmark was added ");
doc.Push(paragraph);
paragraph.AddBookmarkCrossRef("aboveBelow", bookmarks[0]);