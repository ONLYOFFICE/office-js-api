// Set the bold property to the text character in a document.

// How to make the paragraph text bold in a document.

// Get the first paragraph and set it bold in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);