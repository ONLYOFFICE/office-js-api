// Replace the word at the cursor position with a new word in a document.

// How do I overwrite a single word based on where the cursor sits in a document?

// Move the cursor into a word and swap it out without retyping surrounding text in a document.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

doc.ReplaceCurrentWord("fox");
