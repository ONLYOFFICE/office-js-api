// This example shows how to select the current word.
let document = Api.GetDocument();
let para1 = document.GetElement(0);
let run = para1.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

document.SelectCurrentWord();

let para2 = Api.CreateParagraph();
para2.AddText("The selected text is " + document.GetRangeBySelect().GetText());
document.Push(para2);
