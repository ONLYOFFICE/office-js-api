// This example adds footnote fot the document.
let document = Api.GetDocument();
let paragraph = document.GetElement(0); 
paragraph.AddText("This is just a sample text.");
document.AddFootnote();
let footnotesFirstParagraphs = document.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);