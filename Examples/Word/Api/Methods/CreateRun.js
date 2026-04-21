// Create a run and insert it into the document.

// Create a run, add a text to it, and insert it into the first paragraph of the document.

// A text run represents a contiguous block of text with the same formatting.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);