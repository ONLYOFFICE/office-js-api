// Add a footnote and write bold text into its first paragraph in a document.

// How do I access the first paragraph of each footnote to add formatted text in a document?

// Populate footnote content by writing directly to each footnote's opening paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0); 
paragraph.AddText("This is just a sample text.");
doc.AddFootnote();
let footnotesFirstParagraphs = doc.GetFootnotesFirstParagraphs();
footnotesFirstParagraphs[0].AddText("Footnote 1");
footnotesFirstParagraphs[0].SetBold(true);