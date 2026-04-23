// Position selected text above or below the normal line as superscript or subscript in a document.

// How do I align a range of characters vertically as raised or lowered text in a document?

// Mark a word or symbol to sit above or below the baseline of surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");