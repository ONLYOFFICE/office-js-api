// Get a Range object that represents the part of the document contained in the specified run in a document.

// Get a range using position index and make it bold in a document.

// How to get the range where the run is located in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let range = run.GetRange(0, 3);
range.SetBold(true);