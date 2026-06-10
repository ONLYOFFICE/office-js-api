// Check whether a table of contents shows page numbers.

// Insert a table of contents built from the document headings.

// Read whether page numbers are included in the table of contents entries.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isInclude = toc.GetIncludePageNumbers();
