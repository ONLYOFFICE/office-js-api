// This example shows how to replace the current word.
let document = Api.GetDocument();
let para1 = document.GetElement(0);
para1.AddText("The quick brown ");
let run = para1.AddText("cat");
para1.AddText(" jumps over the lazy dog");
run.MoveCursorToPos(1);

document.ReplaceCurrentWord("fox");

