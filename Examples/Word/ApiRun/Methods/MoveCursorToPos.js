// This example shows how to place cursor in the specifed position in the text.
let doc = Api.GetDocument();
let para = doc.GetElement(0);
let run = para.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);
