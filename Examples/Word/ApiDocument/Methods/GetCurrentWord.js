// This example shows how to get the current word.
let document = Api.GetDocument();
let para1 = document.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("fox");
para1.AddText(" jumps over the lazy dog");

run.MoveCursorToPos(1);

let para2 = Api.CreateParagraph();
para2.AddText("The current word is " + document.GetCurrentWord());
document.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word after cursor is " + document.GetCurrentWord("after"));
document.Push(para2);

para2 = Api.CreateParagraph();
para2.AddText("The part of the word before cursor is " + document.GetCurrentWord("before"));
document.Push(para2);

