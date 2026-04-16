// Add a heading cross-reference to the paragraph in a document.

// How to create a heading reference to the paragraph in a document.

// Add a cross-reference to the heading of the paragraph in a document.

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