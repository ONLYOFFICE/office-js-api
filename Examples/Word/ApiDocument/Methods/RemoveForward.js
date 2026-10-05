// Remove characters after the cursor in a document.

// The method works like the Delete key and deletes characters or whole words to the right of the cursor.

// Type a sentence, move the cursor to the start of the document, then delete the first word.

let doc = Api.GetDocument();
doc.EnterText("Draft text in your document.");
doc.MoveCursorToStart();
doc.RemoveForward(6);
