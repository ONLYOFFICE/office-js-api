// Read and modify the default text formatting properties for the entire document in a document.

// How do I set the default font family, size, and language for all text in a document?

// Change font settings at the document level so every text run inherits the new defaults in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");