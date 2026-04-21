// Get a bookmark range in a document.

// Get a range with a bookmark with specific name in a document.

// How to retrieve a range bookmarked and set it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);