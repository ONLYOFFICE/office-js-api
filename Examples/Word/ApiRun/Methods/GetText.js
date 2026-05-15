// Extract the plain text content from a text run in a document.

// How do I read the string of characters stored in a text run in a document?

// Retrieve the readable text from a run and display it in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("\tThis is a text run");
paragraph.AddElement(run);
let text = run.GetText({"NewLineSeparator": "\r", "TabSymbol": "\t"});
paragraph = Api.CreateParagraph();
paragraph.AddText("The text of the specified run: " + text);
doc.Push(paragraph);