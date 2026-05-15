// Move the cursor to a specific character position within a run in a document.

// How do I place the cursor at a chosen position inside a text run in a document?

// Position the insertion point at an exact offset within a piece of text in a document.

let doc = Api.GetDocument();
let para = doc.GetElement(0);
let run = para.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);