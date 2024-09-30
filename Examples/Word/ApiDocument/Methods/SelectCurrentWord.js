// This example shows how to select the current word.
let oDocument = Api.GetDocument();
let oPara1 = oDocument.GetElement(0);
let oRun = oPara1.AddText("The quick brown fox jumps over the lazy dog");
oRun.MoveCursorToPos(16);

oDocument.SelectCurrentWord();

let oPara2 = Api.CreateParagraph();
oPara2.AddText("The selected text is " + oDocument.GetRangeBySelect().GetText());
oDocument.Push(oPara2);
