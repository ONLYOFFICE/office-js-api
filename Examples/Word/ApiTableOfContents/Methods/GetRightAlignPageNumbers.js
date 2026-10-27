// Check whether page numbers are right-aligned in a table of contents.

// Insert a table of contents built from the document headings.

// Read whether the page numbers are aligned to the right margin.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isRightAlign = toc.GetRightAlignPageNumbers();
let resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Page numbers right-aligned: " + isRightAlign);
doc.Push(resultParagraph);
