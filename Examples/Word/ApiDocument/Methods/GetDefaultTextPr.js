// Get a set of default properties for the text run in the current document in a document.

// How to get default text properties of a document.

// Update the default text properties of the text elements in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(30);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Comic Sans MS");
paragraph.AddText("This is just a text.");