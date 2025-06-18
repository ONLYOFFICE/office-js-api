// This example showh how to get the first paragraphs from all footnotes in the document.

// How to get the first footnote paragraph, add text to it and make it bold.

// Retrieve all footnote first paragraph for further manipulation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);