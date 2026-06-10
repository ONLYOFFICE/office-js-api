// Format the table of contents entries as hyperlinks.

// Insert a table of contents built from the document headings.

// Enable hyperlinks so each entry links to its heading.

let doc = Api.GetDocument();
let style = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(style);
paragraph.AddText("Chapter 1");
let toc = doc.AddTableOfContents({"BuildFrom": {"OutlineLvls": 9}});
toc.SetUseHyperlinks(true);
