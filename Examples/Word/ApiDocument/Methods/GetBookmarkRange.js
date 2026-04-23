// Retrieve the text range covered by a named bookmark in a document.

// How do I get the range that a bookmark spans in a document?

// Apply bold formatting to a bookmarked range by looking it up by name in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 9);
range.AddBookmark("Bookmark");
range = doc.GetBookmarkRange("Bookmark");
range.SetBold(true);