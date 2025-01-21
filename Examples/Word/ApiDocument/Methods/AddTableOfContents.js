// This example adds a table of content to the document.
let document = Api.GetDocument();
let newDocumentStyle = document.GetStyle("Heading 1");
let paragraph = document.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
newDocumentStyle = document.GetStyle("Heading 2");
paragraph = Api.CreateParagraph();
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 2");
document.Push(paragraph);
let tocPr = {"ShowPageNums": true, "RightAlgn": true, "LeaderType": "dot", "FormatAsLinks": true, "BuildFrom": {"OutlineLvls": 9}, "TocStyle": "standard"};
document.AddTableOfContents(tocPr);