// This example shows how to replace the current word.
let oDocument = Api.GetDocument();
let oPara1 = oDocument.GetElement(0);
oPara1.AddText("The quick brown ");
let oRun = oPara1.AddText("cat");
oPara1.AddText(" jumps over the lazy dog");
oRun.MoveCursorToPos(1);

oDocument.ReplaceCurrentWord("fox");

