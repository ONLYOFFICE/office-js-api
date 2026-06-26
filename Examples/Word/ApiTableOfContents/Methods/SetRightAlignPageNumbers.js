// Place the page numbers right after the entry text in a table of contents.

// Insert a table of contents built from the document headings.

// Disable right alignment so page numbers follow the entry text directly.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetRightAlignPageNumbers(false);
