// This example specifies that the contents of this paragraph are displayed along with a line appearing directly below the character.

// How to create a new text and underline it.

// Create a new text run and underline it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);