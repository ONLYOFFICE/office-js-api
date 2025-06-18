// This example shows how to get the current word.

// How to get a word where the cursor is set.

// Display the parts of the word before or after the cursor.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("fox");
para1.AddText(" jumps over the lazy dog");

run.MoveCursorToPos(1);

let para2 = Api.CreateParagraph();
para2.AddText("The current word is " + doc.GetCurrentWord());
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word after cursor is " + doc.GetCurrentWord("after"));
doc.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word before cursor is " + doc.GetCurrentWord("before"));
doc.Push(para2);

