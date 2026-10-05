// Remove characters before the cursor in a document.

// The method works like the Backspace key and deletes characters or whole words to the left of the cursor.

// Type a sentence, delete its last word, then type a new ending.

let doc = Api.GetDocument();
doc.EnterText("This is the text in your document.");
doc.RemoveBackward(9);
doc.EnterText("paragraph.");
