// This example shows how to get bookmark text.
let document = Api.GetDocument()
let paragraph = document.GetElement(0)
paragraph.AddText("ONLYOFFICE Document Builder")
let range1 = document.GetRange(0, 11)
range1.AddBookmark("BookmarkName")
let bookmark = document.GetBookmark("BookmarkName")
paragraph.AddLineBreak()
paragraph.AddText("Bookmark text is: " + bookmark.GetText())
