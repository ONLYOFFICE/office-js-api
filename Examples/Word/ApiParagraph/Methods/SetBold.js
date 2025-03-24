// This example sets the bold property to the text character.

// How to make the paragraph text bold.

// Get the first paragraph and set it bold.

let doc = editor.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the font set to bold.");
paragraph.SetBold(true);