// This example shows how to place cursor in the specifed position in the text.
let oDocument = Api.GetDocument();
let oPara = oDocument.GetElement(0);
let oRun = oPara.AddText("The quick brown fox jumps over the lazy dog");
oRun.MoveCursorToPos(16);
