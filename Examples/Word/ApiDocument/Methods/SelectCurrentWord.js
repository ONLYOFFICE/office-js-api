// This example shows how to select the current word.
let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

doc.SelectCurrentWord();

let para2 = Api.CreateParagraph();
para2.AddText("The selected text is " + doc.GetRangeBySelect().GetText());
doc.Push(para2);
