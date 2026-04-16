// Specify that the contents of this paragraph are displayed along with a line appearing directly below the character in a document.

// How to create a new text and underline it in a document.

// Create a new text run and underline it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);