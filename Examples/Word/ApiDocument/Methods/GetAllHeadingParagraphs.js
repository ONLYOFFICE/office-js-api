// This example shows how to get all heading paragraphs from the document.

// Get all heading paragraphs added to the document.

// How to retrieve all heading paragraphs and make capitalized the first one.

let doc = Api.GetDocument();
let newDocumentStyle = doc.GetStyle("Heading 1");
let paragraph = doc.GetElement(0);
paragraph.SetStyle(newDocumentStyle);
paragraph.AddText("Heading 1");
let headingParagraphs = doc.GetAllHeadingParagraphs();
headingParagraphs[0].SetCaps(true);