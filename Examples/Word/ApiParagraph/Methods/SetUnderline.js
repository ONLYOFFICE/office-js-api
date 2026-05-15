// Underline all the text in a paragraph to draw attention to it in a document.

// How do I display a line beneath every word in a paragraph in a document?

// Emphasize paragraph content by enabling underlining for the entire block of text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);