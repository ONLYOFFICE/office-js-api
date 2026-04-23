// Move the cursor left by a specified number of characters in a document.

// How do I step the cursor backward through text in a document?

// Back up the cursor after reaching the end so it lands on a target word in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the text in your document.");
doc.MoveCursorToEnd();
doc.MoveCursorLeft(11);

paragraph = Api.CreateParagraph();
paragraph.AddText(doc.GetCurrentWord());
doc.Push(paragraph);