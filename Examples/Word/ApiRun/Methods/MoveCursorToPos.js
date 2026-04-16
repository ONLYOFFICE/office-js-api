// Place cursor in the specifed position in the text in a document.

// How to move the cursor to the specific position of the text in a document.

// Add text to the paragraph and move the cursor to the 16 position in a document.

let doc = Api.GetDocument();
let para = doc.GetElement(0);
let run = para.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);