// This example shows how to get bookmark range.
let document = Api.GetDocument();
let paragraph = document.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = document.GetRange(0, 11);
range.AddBookmark("BookmarkName");
let bookmark = document.GetBookmark("BookmarkName");
let bookmarkRange = bookmark.GetRange();
bookmarkRange.SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText("Bookmark range is shown in bold");
