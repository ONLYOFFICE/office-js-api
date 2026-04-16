// Replace the current word in a document.

// How to change the word to another one in a document.

// Add the new word instead of another using cursor position in a document.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

doc.ReplaceCurrentWord("fox");
