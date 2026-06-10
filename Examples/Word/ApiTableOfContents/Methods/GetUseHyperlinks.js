// Check whether the table of contents entries are formatted as hyperlinks.

// Insert a table of contents built from the document headings.

// Read whether the entries link to their target headings.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
let isUseHyperlinks = toc.GetUseHyperlinks();
