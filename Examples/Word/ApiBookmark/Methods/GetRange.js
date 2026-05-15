// Retrieve and bold the text range covered by a bookmark in a document.

// How do I access the range of a bookmark to apply bold formatting in a document?

// Use a bookmark's range to change text appearance without selecting it manually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = doc.GetBookmark("BookmarkName");
let bookmarkRange = bookmark.GetRange();
bookmarkRange.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText("Bookmark range is shown in bold");