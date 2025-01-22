// This example shows how to get bookmark range.
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
