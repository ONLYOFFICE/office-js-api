// This example returns a text from the text run.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
let text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
doc.Push(paragraph);