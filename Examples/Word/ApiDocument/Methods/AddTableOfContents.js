// Generate a table of contents from headings in a document.

// Build the heading outline, then add an anchor paragraph where the table of contents should appear.

// Insert the table of contents so it replaces the anchor range.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = doc.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
doc.Push(paragraph);
let anchor = Api.CreateParagraph();
anchor.AddText("Table of contents goes here");
doc.Push(anchor);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvlStart": 1, "OutlineLvls": 9}, "TocStyle": "standard"};
doc.AddTableOfContents(tocPr, anchor.GetRange());
