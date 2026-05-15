// Retrieve the active footnote at the current cursor position in a document.

// How do I get the footnote the cursor is currently inside in a document?

// Read the text of the active footnote to display or process it elsewhere in a document.

let doc = Api.GetDocument();
let footnote = doc.AddFootnote();
let paragraph = footnote.GetElement(0);
paragraph.AddText("Footnote text");

let curFootnote = doc.GetCurrentFootEndnote();
paragraph = doc.GetElement(0);
let footnoteText = curFootnote.GetText();
paragraph.AddText(footnoteText);