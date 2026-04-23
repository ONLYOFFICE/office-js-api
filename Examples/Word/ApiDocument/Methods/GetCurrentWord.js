// Read the word at the cursor position, including the text before or after the cursor, in a document.

// How do I get the word the cursor is currently placed on in a document?

// Split the word at the cursor to inspect its left and right portions separately in a document.

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
