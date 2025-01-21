// This example shows how to get all heading paragraphs from the document.
let document = Api.GetDocument();
let newDocumentStyle = document.GetStyle("Heading 1");
let paragraph = document.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = document.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);