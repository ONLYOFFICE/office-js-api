// Hide the page numbers in a table of contents.

// Insert a table of contents built from the document headings.

// Turn page numbers off for the table of contents entries.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetIncludePageNumbers(false);
