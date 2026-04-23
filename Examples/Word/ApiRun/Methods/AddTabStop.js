// Insert one or more tab stops into a text run to align content horizontally in a document.

// How do I add spacing between words using tab stops inside a text run in a document?

// Shift part of a text run to a new horizontal position with tab characters in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);