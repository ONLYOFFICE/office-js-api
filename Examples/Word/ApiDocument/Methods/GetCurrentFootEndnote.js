// This example gets the current footnote in the document.

// How to add footnote to the document.

// Get text from the current footnote.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let curFootnote = doc.GetCurrentFootEndnote();
paragraph = doc.GetElement(0);
let footnoteText = curFootnote.GetText();
paragraph.AddText(footnoteText);