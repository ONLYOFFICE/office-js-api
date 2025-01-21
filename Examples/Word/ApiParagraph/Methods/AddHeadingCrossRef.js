// This example adds a heading cross-reference to the paragraph.
let document = Api.GetDocument();
let newDocumentStyle = document.GetStyle("Heading 1");
let paragraph = document.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Cross-reference method");
let headingParagraphs = document.GetAllHeadingParagraphs();
paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 1 style is applied to the heading ");
document.Push(paragraph);
paragraph.AddHeadingCrossRef("text", headingParagraphs[0]);