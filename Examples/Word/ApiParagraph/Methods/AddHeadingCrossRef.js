// Insert a cross-reference to a heading into a paragraph in a document.

// How do I link paragraph text to an existing heading in a document?

// Let readers jump to a titled section by embedding a heading reference inside another paragraph in a document.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Cross-reference method");
let headingParagraphs = doc.GetAllHeadingParagraphs();
paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 1 style is applied to the heading ");
doc.Push(paragraph);
paragraph.AddHeadingCrossRef("text", headingParagraphs[0]);