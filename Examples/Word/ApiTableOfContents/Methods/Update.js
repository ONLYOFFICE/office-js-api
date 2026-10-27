// Refresh a table of contents after the document content changes.

// Insert a table of contents built from the document headings.

// Rebuild the table of contents so it reflects the current headings and page numbers.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.Update();
