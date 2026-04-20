// Create a run and insert it into the document.

// Create a run, add a text to it, and insert it into the first paragraph of the document.

// How to create the text run object and add it to the paragraph class in a document.

// How to add a text to the paragraph in a document.

// How to add a text to the text run object in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a text run");
paragraph.AddElement(run);